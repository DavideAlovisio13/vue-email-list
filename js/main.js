
const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            mailTotal: 10,
        }
    },
    methods: {
        // funzione che genera numeri casuali
        randomInt(min, max) {
            return (Math.floor(Math.random() * ((max + 1) - min) + min));
        },
        getEmail() {
            for(let i = 0; i < this.mailTotal; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    
                    (this.emails).push(res.data.response);
                });
            }
        }
    },
    created() {
        console.log(this.getEmail());
    }
}).mount('#app')