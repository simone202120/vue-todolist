var app= new Vue(
    {
        el:'#app',
        data:{
            nuovoTask:'',
            arrayTask:[]
        },
        methods:{
            aggiugngitask(){
                this.arrayTask.push(nuovoTask);
            }

            
        },
       
    }
   
);

