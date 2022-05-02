const app = new Vue({
    el: '#app',
    data: {
        mail:[],
        dati: 10,
    },
    methods: {},
    created(){
      
      for(let i = 0; i<this.dati; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
          this.mail.push(resp.data.response) 
        }).catch((err)=>{
            console.error(err)
        })
      }

    }
})