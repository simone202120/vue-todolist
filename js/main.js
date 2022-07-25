var app= new Vue(
    {
        el:'#app',
        data:{
            nuovoTask:'',
            arrayTask:[]
        },
        methods:{
            aggiungitask(){
                this.arrayTask.push({task: this.nuovoTask, stato: true});
                console.log(this.arrayTask)
            },

            eliminatask(){

            }

        
        },
       
    }
   
);

