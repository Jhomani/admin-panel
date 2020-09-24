<template>
   <div class="container-provider">
      <div class="container-fluid">
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
          <p class="_title0">
            Users Admin
            <Button 
              title="add provider" 
              type="success" 
              style="margin-left: 10px" 
              shape="circle" 
              @click="addModal = true"
              icon="md-add">
            </Button>
          </p>

          <div class="_overflow _table_div">
            <table class="_table">
                <!-- TABLE TITLE -->
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>User Type</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
                <!-- TABLE TITLE -->


                <!-- ITEMS -->
              <tr v-for="(user, index) in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td class="_table_name">{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.user_type || "Admin" }}</td>
                <td>{{ user.created_at.slice(0,10) }}</td>
                <td>
                  <Button @click="handleOpenModalEdit(user, index)"  type="success">Edit</Button>
                  <Button @click="handleDelete(user, index)" :loading="user.isDeleting" type="error">Delete</button>
                </td>
              </tr>
                <!-- ITEMS -->
            </table> </div>
          
        </div>
        <Page :total="100" />

    <!--  Users admin add modal  -->  
     <Modal v-model="addModal" title="Add User Admin" >
         <Form label-position="top">
          <FormItem label="Name:">
            <Input placeholder="Enter name of user" v-model="newUser.name"></Input>
          </FormItem>
          <FormItem label="Email:">
            <Input placeholder="Enter email of user" type="email" v-model="newUser.email"></Input>
          </FormItem>
          <FormItem label="Password:">
            <Input placeholder="Enter password" type="password" v-model="newUser.password"></Input>
          </FormItem>
          <FormItem label="Select User type:">
            <Select v-model="newUser.role_id" placeholder="Select" style="width:200px">
              <Option v-for="(r, i) in roles" :key="i"  :value="r.id">{{ r.role_name }}</Option>
            </Select>
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
            {{ isLoading ?'Adding...' :'Add Admin' }}
          </Button>
        </div>
    </Modal> 

    <!--  Users editing modal  -->  
     <Modal v-model="editModal" title="Edit User Account" >
       <Form label-position="top">
          <FormItem label="Name">
              <Input placeholder="Enter name of user" v-model="editUser.name"></Input>
          </FormItem>
          <FormItem label="Email:">
            <Input placeholder="Enter email of user" type="email" v-model="editUser.email"></Input>
          </FormItem>
          <FormItem label="Password (Optional):">
            <Input placeholder="New password" type="password" v-model="editUser.password"></Input>
          </FormItem>
          <FormItem label="Select User type:">
            <Select v-model="editUser.role_id" placeholder="Select" style="width:200px">
              <Option v-for="(r, i) in roles" :key="i"  :value="r.id">{{ r.role_name }}</Option>
            </Select>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button 
            @click="editModal = false" > 
            Cancel
          </Button>
          <Button 
            type="success" 
            @click="handleSaveEditUser" 
            :disable="isLoading" 
            :loading="isLoading">
            {{ isLoading ?'Editing...' :'Edit Users' }}
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
        users: [],
        roles: [],
        newUser: {
          name: '',
          email: '',
          password: '',
          role_id: null,
        },
        editUser: {
          name: '',
          email: '',
          password: '',
          rule_id: null,
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
        let { name, email, password } = this.newUser;

        if(!name || !email || !password) {
          return this.$Notice.error({ title: 'Complite all fields, please.', desc: ''});
        }

        this.isLoading = true;

        const res = await this.callApi('post', '/app/create_user', this.newUser) 

        this.isLoading = false;

        if(("" + res.status).match(/^2/) !== null){
          this.$Notice.success({ title: 'add User successfully', desc: ''});
          this.users.push(res.data)
          this.addModal = false;
        } else if(res.status === 422){
          this.$Notice.error({ title: 'Validation error', desc: ''});
          console.log(res);
        } else {
          this.$Notice.error({ title: 'Can not add User', desc: ''});
        }
        
        this.newUser = {
          name: '',
          email:'', 
          password:'', 
          type:'Admin', 
        }
      },

      async getData () {

        const [res, resRole] = await Promise.all([
          await this.callApi('get', '/app/get_users'),
          await this.callApi('get', '/app/get_roles')
        ])

        if(res.status === 200){
          this.users = res.data;
        } else {
          this.$Notice.error({ title: 'Can not get users', desc: ''});
        }

        if(resRole.status == 200){
          this.roles = resRole.data;
        } else {
          this.$Notice.error({ title: 'Can not get users', desc: ''});
        }
      },

      handleOpenModalEdit (user, index) {
        this.editModal = true;
        this.editUser = {...user};
        this.index = index;
      },
      async handleSaveEditUser (){
        let { name, email, user_type} = this.editUser;

        if(!name || !email || !user_type) {
          return this.$Notice.error({ title: 'Complite all the fields, please.', desc: ''});
        }

        this.isLoading = true;

        const res = await this.callApi('post', '/app/edit_user', this.editUser ) 

        this.isLoading = false;

        if(("" + res.status).match(/^2/) !== null){
          this.users[this.index] = {...this.editUser};
          this.$Notice.success({ title: 'Edit user successfully', desc: ''});
          this.editModal = false;
        } else {
          this.$Notice.error({ title: 'Can not Edit user', desc: ''});
        }
      },

      async handleDelete(provider, index) {
        if(!confirm('Are you sure delete this provider')) return;
        //provider.isDeleting = true;

        this.$set(provider, 'isDeleting', true);
      
        const res = await this.callApi('post', '/app/delete-provider', { id: provider.id }) 

        this.$set(provider, 'isDeleting', false);

        if(("" + res.status).match(/^2/) !== null){
          this.providers.splice(index, 1);
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
