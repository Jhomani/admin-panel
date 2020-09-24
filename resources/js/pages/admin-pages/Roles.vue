<template>
   <div class="container-provider">
      <div class="container-fluid">
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
          <p class="_title0">
            Roles Management
            <Button 
              title="add provider" 
              style="margin-left: 10px" 
              shape="circle" 
              @click="addModal = true"
              icon="md-add">
              Add role
            </Button>
          </p>

          <div class="_overflow _table_div">
            <table class="_table">
                <!-- TABLE TITLE -->
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
                <!-- TABLE TITLE -->


                <!-- ITEMS -->
              <tr v-for="(role, index) in roles" :key="role.id">
                <td>{{ role.id }}</td>
                <td class="_table_name">{{ role.role_name }}</td>
                <td>{{ role.created_at.slice(0,10) }}</td>
                <td>
                  <Button @click="handleOpenModalEdit(role, index)"  type="success">Edit</Button>
                  <Button @click="handleDelete(role, index)" :loading="role.isDeleting" type="error">Delete</button>
                </td>
              </tr>
                <!-- ITEMS -->
            </table> </div>
          
        </div>
        <Page :total="100" />

    <!--  Users admin add modal  -->  
     <Modal v-model="addModal" title="Add Role" >
         <Form label-position="top">
          <FormItem label="Role name:">
            <Input placeholder="Enter name of role" v-model="newRole.name"></Input>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button 
            style="margin-top:15px" 
            type="success" 
            @click="handleSubmit" 
            :disable="isLoading" 
            :loading="isLoading" 
            long> 
            {{ isLoading ?'Adding...' :'Add Role' }}
          </Button>
        </div>
    </Modal> 

    <!--  Users editing modal  -->  
     <Modal v-model="editModal" title="Edit Role" >
         <Form label-position="top">
          <FormItem label="Role name:">
            <Input placeholder="Enter name of role" v-model="editRole.name"></Input>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button 
            style="margin-top:15px" 
            type="success" 
            @click="handleSaveEditRole" 
            :disable="isLoading" 
            :loading="isLoading" 
            long> 
            {{ isLoading ?'Editing...' :'Edit Role' }}
          </Button>
        </div>
    </Modal> 
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        roles: [],
        newRole: {
          name: '',
        },
        editRole: {
          name: '',
        },
        addModal: false,
        editModal: false,
        index:-1,
        isLoading: false,
        token: '',
      }
    },
    created () {
      this.getData();
    },
    methods: {
      async handleSubmit () {
        let { name } = this.newRole;

        if(!name) return this.$Notice.error({ title: 'Role name is required' });

        this.isLoading = true;

        const res = await this.callApi('post', '/app/add_role', this.newRole) 

        this.isLoading = false;

        if(res.status === 201){
          this.$Notice.success({ title: 'add User successfully', desc: ''});
          this.roles.push(res.data)
          this.addModal = false;
        } else if(res.status === 422){
          this.$Notice.error({ title: 'Validation error', desc: ''});
          console.log(res);
        } else {
          this.$Notice.error({ title: 'Can not add Role', desc: ''});
        }
        
        this.newRole = {
          name: '',
        }
      },

      async getData () {
        const res = await this.callApi('get', '/app/get_roles')

        if(res.status == 200){
          this.roles = res.data;
        } else {
          this.$Notice.error({ title: 'Can not get users', desc: ''});
        }
      },

      handleOpenModalEdit (role, index) {
        this.editModal = true;
        this.editRole = {...role};
        this.index = index;
      },
      async handleSaveEditRole (){
        let { name } = this.editRole;

        if(!name) return this.$Notice.error({ title: 'Role name is required' });

        this.isLoading = true;

        const res = await this.callApi('post', '/app/edit_role', this.editRole ) 

        this.isLoading = false;

        if(res.status === 200){
          this.$Notice.success({ title: 'add User successfully', desc: ''});
          this.roles[this.index] = this.editRole;
          this.editModal = false;
        } else if(res.status === 422){
          this.$Notice.error({ title: 'Validation error', desc: ''});
        } else {
          this.$Notice.error({ title: 'Can not add Role', desc: ''});
        }
      },

      async handleDelete(role, index) {
        if(!confirm('Are you sure delete this provider')) return;
        //provider.isDeleting = true;

        this.$set(role, 'isDeleting', true);
      
        const res = await this.callApi('post', '/app/delete_role', { id: role.id }) 

        this.$set(role, 'isDeleting', false);

        if(res.status === 200){
          this.roles.splice(index, 1);
          this.$Notice.success({ title: 'Delete provider successfully', desc: ''});
        } else {
          this.$Notice.error({ title: 'Can not delete provider', desc: ''});
        }
      },
    }
  }
</script>
<style >
.ivu-modal{
  top: 50px; 
}
.input-number{
  display: flex;
}
.input-number .ivu-form-item{
  margin-left:10px;
}
.input-number .ivu-form-item:first-child{
  margin-left:0px;
}
.container-provider{
  position: fixed;
  top:80px;
  right:0;
  left:248px;
  z-index:-2;
}
.vertical-center-modal{
  display: flex;
  align-items: center;
  justify-content: center;

}
.vertical-center-modal .ivu-modal{
    top: 0;
}
</style>
