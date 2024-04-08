import axios from 'axios';
const {createApp} = Vue;

createApp({
    data() {
        return {
            emails: [],
            mailTotal:10,
        }
    },
    methods: {
        // funzione che genera numeri casuali
        randomIntero(min, max){
            return (Math.floor(Math.random() * ((max + 1) - min) + min));
        },
        getEmail () {
           
        }
    },
    created() {
        this.getN();
    }
})