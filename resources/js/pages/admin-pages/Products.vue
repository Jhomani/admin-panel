<template>
   <div class="container-product">
      <div class="container-fluid">

        <div class="row">

          <div class="col-12 col-md-3">
            <div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_one">
              <div class="_1adminOverveiw_card_left">
                <p class="_1adminOverveiw_card_left_num">3</p>

                <p class="_1adminOverveiw_card_left_title">Today's News</p>
              </div>
              <div class="_1adminOverveiw_card_right">
                <Icon type="ios-paper" />
              </div>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
              <div class="_1adminOverveiw_card_left">
                <p class="_1adminOverveiw_card_left_num">29</p>

                <p class="_1adminOverveiw_card_left_title">Total News</p>
              </div>
              <div class="_1adminOverveiw_card_right">
                <Icon type="ios-paper-outline" />
              </div>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
              <div class="_1adminOverveiw_card_left">
                <p class="_1adminOverveiw_card_left_num">29</p>

                <p class="_1adminOverveiw_card_left_title">Features News</p>
              </div>
              <div class="_1adminOverveiw_card_right">
                <Icon type="md-copy" />
              </div>
            </div>
          </div>

          <div class="col-12 col-md-3">
            <div class="_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two">
              <div class="_1adminOverveiw_card_left">
                <p class="_1adminOverveiw_card_left_num">29</p>

                <p class="_1adminOverveiw_card_left_title">Card News</p>
              </div>
              <div class="_1adminOverveiw_card_right">
                <Icon type="md-list-box" />
              </div>
            </div>
          </div>
        </div>  
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
          <p class="_title0">
            Products 
            <Button 
              title="add product" 
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
                <th>Price</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
                <!-- TABLE TITLE -->


                <!-- ITEMS -->
              <tr v-for="(product, index) in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td class="_table_name">{{ product.name }}</td>
                <td>Bs.{{ product.price }}</td>
                <td>{{ product.created_at.slice(0,10) }}</td>
                <td>
                  <Button type="info">View</Button>
                  <Button @click="handleOpenModalEdit(product, index)"  type="success">Edit</Button>
                  <Button @click="handleDelete(product, index)" :loading="product.isDeleting" type="error">Delete</button>
                </td>
              </tr>
                <!-- ITEMS -->
            </table>
          </div>
          
        </div>
        <Page :total="100" />

    <!--  products add modal  -->  
     <Modal v-model="addModal" title="Add Product" >
         <Form label-position="top">
          <FormItem label="Name">
              <Input placeholder="Enter name of product" v-model="newProduct.name"></Input>
          </FormItem>
          <FormItem label="Description">
            <Input 
              v-model="newProduct.description" 
              maxlength="100" 
              show-word-limit 
              type="textarea" 
              placeholder="Enter the description"/>
          </FormItem>
          <FormItem label="Image Url">
            <Input placeholder="Eg. https://i.im.com/WrN.jpg?4" v-model="newProduct.image"> </Input>
          </FormItem>
          <FormItem label="Country Origin">
              <Input placeholder="Enter the country origin of product" v-model="newProduct.country_origin"></Input>
          </FormItem>
          <div class="input-number">
            <FormItem label="Price:">
                <Input v-model="newProduct.price" min="0" type="number"></Input>
            </FormItem>
            <FormItem label="Quantity:">
                <Input v-model="newProduct.quantity" min="1" type="number"></Input>
            </FormItem>
            <FormItem label="Provider ID:">
                <Input v-model="newProduct.provider_id" type="number"></Input>
            </FormItem>
          </div>
        </Form>
        <div slot="footer">
          <Button 
            style="margin-top:15px" 
            type="success" 
            @click="handleSubmit" 
            :disable="isLoading" 
            :loading="isLoading" 
            long> 
            {{ isLoading ?'Adding...' :'Add Product' }}
          </Button>
        </div>
    </Modal> 

    <!--  products editing modal  -->  
     <Modal v-model="editModal" title="Edit Product" >
         <Form label-position="top">
          <FormItem label="Name">
              <Input placeholder="Enter name of product" v-model="editProduct.name"></Input>
          </FormItem>
          <FormItem label="Description">
            <Input 
              v-model="editProduct.description" 
              maxlength="100" 
              show-word-limit 
              type="textarea" 
              placeholder="Enter the description"/>
          </FormItem>
          <FormItem label="Image Url">
            <Input placeholder="Eg. https://i.im.com/WrN.jpg?4" v-model="editProduct.image"> </Input>
          </FormItem>
          <FormItem label="Country Origin">
              <Input placeholder="Enter the country origin of product" v-model="editProduct.country_origin"></Input>
          </FormItem>
          <div class="input-number">
            <FormItem label="Price:">
                <Input v-model="editProduct.price" min="0" type="number"></Input>
            </FormItem>
            <FormItem label="Quantity:">
                <Input v-model="editProduct.quantity" min="1" type="number"></Input>
            </FormItem>
            <FormItem label="Provider ID:">
                <Input v-model="editProduct.provider_id" type="number"></Input>
            </FormItem>
          </div>
        </Form>
        <div slot="footer">
          <Button 
            @click="editModal = false" > 
            Cancel
          </Button>
          <Button 
            type="success" 
            @click="handleSaveEditProduct" 
            :disable="isLoading" 
            :loading="isLoading">
            {{ isLoading ?'Editing...' :'Edit Product' }}
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
        products: [],
        newProduct: {
          name: '',
          description: '',
          image:'', 
          price: '',
          country_origin: '',
          quantity: '',
          provider_id: '',
        },
        editProduct: {
          name: '',
          description: '',
          image:'', 
          price: '',
          country_origin: '',
          quantity: '',
          provider_id: ''
        },
        addModal: false,
        editModal: false,
        index:-1,
        isLoading: false,
      }
    },
    created () {
      this.getData();
    },
    methods: {
      async handleSubmit () {
        let { name, description, price, quantity, provider_id, image  } = this.newProduct;

        if(!name || !description || !price || !quantity || !provider_id || !image) {
          return this.$Notice.error({ title: 'Fill all the fields, please.', desc: ''});
        }

        this.isLoading = true;

        const res = await this.callApi('post', '/app/add-product', this.newProduct) 
        console.log(res)

        this.isLoading = false;

        if(("" + res.status).match(/^2/) !== null){
          this.$Notice.success({ title: 'add data successfully', desc: ''});
          this.products.push(res.data)
        } else {
          this.$Notice.error({ title: 'Can not add data', desc: ''});
        }
        
        this.addModal = false;
        this.newProduct = {
          name: '',
          description: '',
          image:'', 
          price: '',
          country_origin: '',
          quantity: '',
          provider_id: ''
        }
      },

      async getData () {
        const res = await this.callApi('get', '/app/get-products')

        if(("" + res.status).match(/^2/) !== null){
          this.products = res.data;
        } else {
          this.$Notice.error({ title: 'Can not get product', desc: ''});
        }

      },
      handleOpenModalEdit (product, index) {
        this.editModal = true;
        this.editProduct = {...product};
        this.index = index;
      },
      async handleSaveEditProduct (){
        let { name, description, price, quantity, provider_id, image } = this.editProduct;

        if(!name || !description || !price || !quantity || !provider_id || !image) {
          return this.$Notice.error({ title: 'Fill all fields, please.', desc: ''});
        }

        this.isLoading = true;

        const res = await this.callApi('post', '/app/edit-product', this.editProduct) 

        this.isLoading = false;

        if(("" + res.status).match(/^2/) !== null){
          this.products[this.index] = {...this.editProduct};
          this.$Notice.success({ title: 'Edit product successfully', desc: ''});
          this.editModal = false;
        } else {
          this.$Notice.error({ title: 'Can not Edit product', desc: ''});
        }
      },
      async handleDelete(product, index) {
        if(!confirm('Are you sure delete this product')) return;
        //product.isDeleting = true;

        this.$set(product, 'isDeleting', true);
      
        const res = await this.callApi('post', '/app/delete-product', { id: product.id }) 

        this.$set(product, 'isDeleting', false);

        if(("" + res.status).match(/^2/) !== null){
          this.products.splice(index, 1);
          this.$Notice.success({ title: 'Delete product successfully', desc: ''});
        } else {
          this.$Notice.error({ title: 'Can not delete product', desc: ''});
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
.container-product{
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
