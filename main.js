const app = new Vue({
    el: '#app',
    data: {
        mail:[],
    },
    methods: {},
    created(){
      
      for(let i = 0; i<10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
          this.mail.push(resp.data.response) 
        })
      }

      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
        this.mail = resp.data.response;
      }).catch((err)=>{
          console.error(err)
      })  

      
       
    }
})