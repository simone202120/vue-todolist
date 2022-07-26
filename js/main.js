var app= new Vue(
    {
        el:'#app',
        data:{
            nuovoTask: "",
            arrayTask:[
               
            ]
        },


        methods:{
            aggiungitask(){
                if(this.nuovoTask == ""){
                    alert('il campo nuovo task non può essere vuoto');
                }else{
                this.arrayTask.push({task: this.nuovoTask, stato: true});
                console.log(this.arrayTask)
                this.nuovoTask="";
                console.log(this.nuovoTask)

            }
            },

            eliminatask(indice){
                this.arrayTask.splice(indice,1);
            },

            completato(indice){
               this.arrayTask[indice].stato = false;
                console.log(this.arrayTask[indice].stato)
                
               
            }
        },
    }
);

