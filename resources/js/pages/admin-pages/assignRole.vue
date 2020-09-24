<template>
   <div class="container-provider">
      <div class="container-fluid">
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
          <p class="_title0">
            Roles Management
            <Select v-model="selectedRole" placeholder="Select" style="width:100px">
              <Option v-for="(r, i) in data" :key="i"  :value="r.id">{{ r.role_name }}</Option>
            </Select>
          </p>

          <div class="_overflow _table_div">
            <table class="_table">
                <!-- TABLE TITLE -->
              <tr>
                <th>Resource name</th>
                <th>Read</th>
                <th>Write</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
                <!-- TABLE TITLE -->


                <!-- ITEMS -->
              <tr v-for="(role, index) in resources" :key="role.id">
                <td>{{ role.resourceName }}</td>
                <td><Checkbox v-model="role.read">{{ role.read }}</Checkbox></td>
                <td><Checkbox v-model="role.write">{{ role.write }}</Checkbox></td>
                <td><Checkbox v-model="role.update">{{ role.update }}</Checkbox></td>
                <td><Checkbox v-model="role.delete">{{ role.delete }}</Checkbox></td>
              </tr>
                <!-- ITEMS -->
            </table> </div>
          
        </div>
        <Page :total="100" />

    <!--  Users admin add modal  -->  
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: [],
        selectedRole: '',
        resources: [
          {resourceName: 'Users', read: false, write: false, update: false, delete:false, name: 'users'},
          {resourceName: 'Products', read: false, write: false, update: false, delete:false, name: 'products'},
          {resourceName: 'Providers', read: false, write: false, update: false, delete:false, name: 'providers'},
          {resourceName: 'Roles', read: false, write: false, update: false, delete:false, name: 'roles'}
        ],
        
      }
    },
    created () {
      this.getData();
    },
    methods: {
      async getData () {
        const res = await this.callApi('get', '/app/get_roles')

        if(res.status == 200){
          this.data = res.data;
        } else {
          this.$Notice.error({ title: 'Can not get users', desc: ''});
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
