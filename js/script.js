const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: "./server.php",
      list : [],
      newTaskModel: '',

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
      const data = new FormData();
      data.append('newTask' , this.newTaskModel);

      axios.post(this.apiUrl, data)
        .then(result =>{
          this.list = result.data;
        });
      this.newTaskModel = '';
    },
    removeTask(index){
      const data = new FormData();
      data.append('indexToDelete', index);

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