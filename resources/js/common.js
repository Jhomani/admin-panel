export default {
  data(){
    return {
    }
  },
  methods: {
    async callApi (method, url, data) {
      try {
        return await axios({ method: method, url: url, data: data });
      } catch (err){
        return err.response;
      }
    }
  }
}
