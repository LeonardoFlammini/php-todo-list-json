const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: "./server.php",
      list : [],
      newTaskModel: '',
      message: ''

    }
  },
  methods:{
    getList(){
      axios.get(this.apiUrl)
        .then(result => {
          this.list = result.data;
          console.log(this.list);
        })
    },
    addTask(){
      if(this.newTaskModel != ''){
        this.message = '';
        const data = new FormData();
        data.append('newTask' , this.newTaskModel);
  
        axios.post(this.apiUrl, data)
          .then(result =>{
            this.list = result.data;
          });
        this.newTaskModel = '';
      }else{
        this.message = "Inserisci un task valido";
        setTimeout(() => {
          this.message = '';
        }, 3000);
      }
    },
    removeTask(index){
      const data = new FormData();
      data.append('indexToDelete', index);

      axios.post(this.apiUrl, data)
        .then(result =>{
          this.list = result.data;
        });
      
    },
    toggleDone(index){
      const data = new FormData();
      data.append('indexToToggle', index);
      axios.post(this.apiUrl, data)
        .then(result =>{
          this.list = result.data;
        });
    }
  },
  mounted(){
    this.getList();
  }
}).mount("#app");