const {createApp} = Vue;

createApp({
  data(){
    return{
      arrayProva : [
        'Giallo',
        'rosso',
        'blu'
      ]
    }
  }
}).mount("#app");