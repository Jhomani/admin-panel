<template>
   <div class="container-provider">
      <div class="container-fluid">
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
          <p class="_title0">
            Provider 
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
                <th>Id</th>
                <th>Name</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
                <!-- TABLE TITLE -->


                <!-- ITEMS -->
              <tr v-for="(provider, index) in providers" :key="provider.id">
                <td>{{ provider.id }}</td>
                <td class="_table_name">{{ provider.name }}</td>
                <td>{{ provider.created_at.slice(0,10) }}</td>
                <td>
                  <Button type="info">View</Button>
                  <Button @click="handleOpenModalEdit(provider, index)"  type="success">Edit</Button>
                  <Button @click="handleDelete(provider, index)" :loading="provider.isDeleting" type="error">Delete</button>
                </td>
              </tr>
                <!-- ITEMS -->
            </table> </div>
          
        </div>
        <Page :total="100" />

    <!--  providers add modal  -->  
     <Modal v-model="addModal" title="Add Provider" >
         <Form label-position="top">
          <FormItem label="Name:">
            <Input placeholder="Enter name of provider" v-model="newProvider.name"></Input>
          </FormItem>
          <FormItem label="Image of Provider:">
            <Upload
              multiple
              :headers="{'x-csrf-token': token}"
              type="drag"
              action="/app/image-provider">
              <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="42" style="color: #3399ff"></Icon>
                <p>Click or drag files here to upload</p>
              </div>
            </Upload>
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
            {{ isLoading ?'Adding...' :'Add Provider' }}
          </Button>
        </div>
    </Modal> 

    <!--  providers editing modal  -->  
     <Modal v-model="editModal" title="Edit Provider" >
         <Form label-position="top">
          <FormItem label="Name">
              <Input placeholder="Enter name of provider" v-model="editProvider.name"></Input>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button 
            @click="editModal = false" > 
            Cancel
          </Button>
          <Button 
            type="success" 
            @click="handleSaveEditProvider" 
            :disable="isLoading" 
            :loading="isLoading">
            {{ isLoading ?'Editing...' :'Edit Provider' }}
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
        providers: [],
        newProvider: {
          name: '',
          image: '',
        },
        editProvider: {
          name: '',
          image: '',
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

      this.token = window.Laravel.csrfToken;
      console.log(window.Laravel.csrfToken)
    },
    methods: {
      async handleSubmit () {
        let { name, image} = this.newProvider;

        if(!name || !image) {
          return this.$Notice.error({ title: 'Complite all the fields, please.', desc: ''});
        }

        this.isLoading = true;

        const res = await this.callApi('post', '/app/add-provider', this.newProvider) 
        console.log(res)

        this.isLoading = false;

        if(("" + res.status).match(/^2/) !== null){
          this.$Notice.success({ title: 'add data successfully', desc: ''});
          this.provider.push(res.data)
        } else {
          this.$Notice.error({ title: 'Can not add data', desc: ''});
        }
        
        this.addModal = false;
        this.newProvider = {
          name: '',
          image:'', 
        }
      },

      async getData () {
        const res = await this.callApi('get', '/app/get-provider')

        if(("" + res.status).match(/^2/) !== null){
          this.providers = res.data;
        } else {
          this.$Notice.error({ title: 'Can not get proveders', desc: ''});
        }

      },
      handleOpenModalEdit (provider, index) {
        this.editModal = true;
        this.editProvider = {...provider};
        this.index = index;
      },
      async handleSaveEditProvider (){
        let { name, image} = this.newProvider;

        if(!name || !image) {
          return this.$Notice.error({ title: 'Complite all the fields, please.', desc: ''});
        }

        this.isLoading = true;

        const res = await this.callApi('post', '/app/add-provider', this.newProvider) 

        this.isLoading = false;

        if(("" + res.status).match(/^2/) !== null){
          this.providers[this.index] = {...this.editProvider};
          this.$Notice.success({ title: 'Edit provider successfully', desc: ''});
          this.editModal = false;
        } else {
          this.$Notice.error({ title: 'Can not Edit provider', desc: ''});
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
