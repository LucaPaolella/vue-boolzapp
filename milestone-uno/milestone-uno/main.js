"use strict";

const { createApp } = Vue;

const app = Vue.createApp({
    data() {
        return {
            contatti: [
                {
                    nome: 'Tizio Caio',
                    immagine: 'img/avatar_3.jpg',
                    ultimoAccesso: '6.66',
                },
                {
                    nome: 'Giggio Basdiggio',
                    immagine: 'img/avatar_4.jpg',
                    ultimoAccesso: '6.66',
                },
                {
                    nome: 'Fabio Giorgini',
                    immagine: 'img/avatar_3.jpg',
                    ultimoAccesso: '6.66',
                },
                {
                    nome: 'Cristian Cosenza',
                    immagine: 'img/avatar_4.jpg',
                    ultimoAccesso: '6.66',
                },
                {
                    nome: 'Gaetano frascolla',
                    immagine: 'img/avatar_3.jpg',
                    ultimoAccesso: '6.66',
                },
                {
                    nome: 'La pasta Amatriciana',
                    immagine: 'img/avatar_4.jpg',
                    ultimoAccesso: '6.66',
                },
                {
                    nome: 'è migliore',
                    immagine: 'img/avatar_3.jpg',
                    ultimoAccesso: '6.66',
                },
                {
                    nome: 'Della Carbonara',
                    immagine: 'img/avatar_4.jpg',
                    ultimoAccesso: '6.66',
                },
                {
                    nome: 'Tizio Caio',
                    immagine: 'img/avatar_3.jpg',
                    ultimoAccesso: '6.66',
                },
                {
                    nome: 'Giggio Basdiggio',
                    immagine: 'img/avatar_4.jpg',
                    ultimoAccesso: '6.66',
                },
                {
                    nome: 'Tizio Caio',
                    immagine: 'img/avatar_3.jpg',
                    ultimoAccesso: '6.66',
                },
                {
                    nome: 'Giggio Basdiggio',
                    immagine: 'img/avatar_4.jpg',
                    ultimoAccesso: '6.66',
                },

            ]
        }
    }
}).mount("#app");