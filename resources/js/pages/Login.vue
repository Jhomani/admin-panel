<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-4 offset-4">
        <h1 class="text-center">Login to the dashboart</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4 offset-4">
        <Form label-position="top">
          <FormItem label="Email:">
            <Input placeholder="Enter email of user" type="email" v-model="form.email"></Input>
          </FormItem>
          <FormItem label="Password:">
            <Input placeholder="New password" type="password" v-model="form.password"></Input>
          </FormItem>
        </Form>
        <div>
          <Button 
            style="display:block; margin: 0 auto"
            type="success" 
            @click="handleLogin" 
            :disable="isLoading" 
            :loading="isLoading">
            {{ isLoading ?'Editing...' :'Login' }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
      },
      isLoading: false,
    }
  },
  methods: {
    async handleLogin () {
      this.isLoading = true
      const { email, password } = this.form;
      if( !email.trim() || !password.trim()) { 
        return this.$Notice.error({ title: 'complete email and password', desc: ''});
      }
      if(password.length < 6) {
        return this.$Notice.error({ title: 'Hey!', desc: 'the password should be more then 6 letters.'});
      }

      const res = await this.callApi('post', 'app/admin_login', this.form);

      /*if(res.status === 200){*/
        this.$Notice.success({ title: 'Login successfully'});
        window.location = '/';
      /*} else if(res.status === 401){*/
        /*this.$Notice.error({ title: res.data.msg });*/
      /*} else {*/
        /*this.$Notice.error({ title: 'Exist something error' });*/
      /*}*/

      this.isLoading = false
    }
  }
}
</script>
