var app= new Vue(
    {
        el:'#app',
        data:{
            nuovoTask:'',
            arrayTask:[
                       


                     ]
        },
        methods:{
            aggiungitask(){
                this.arrayTask.push({task: this.nuovoTask, stato: true});
                console.log(this.arrayTask)
                this.nuovoTask=" ";
                console.log(this.nuovoTask)
            },

            eliminatask(indice){
                this.arrayTask.splice(indice,1);
            },

            completato(){
                    this.arrayTask.Task.stato == false;
                
            }

        
        },
       
    }
   
);

