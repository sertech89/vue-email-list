
// Descrizione:


// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


// BONUS

// Far comparire gli indirizzi email solamente quando sono stati tutti generati.




var app = new Vue (
    {
        el: '#root',

        data: {

            // creo un ARRAY VUOTO da riempire con le mail
            emailListArray: []          
                        
        },

        created(){

            // UTILIZZO il CICLO FOR, per pushare 10 volte le mail generate

            for ( let i = 0; i < 10; i++){

                // riporto il link delLE API da cui attingere le mail (MAIL RANDOM)
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

                // imposto la funzione con ARROW FUNCTION in modo tale da far riferimento direttamente a VUE
                .then( (response) => {

                    // faccio il console log per verificare se il percorso sia quello corretto
                    console.log(response.data.response);

                    // PUSHO gli elementi mail dentro all'array vuoto
                    this.emailListArray.push(response.data.response);
                });
            }

        },

        methods: {           

        }

    }

);