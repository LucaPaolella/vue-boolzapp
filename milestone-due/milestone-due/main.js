"use strict";

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            contacts: [
                {
                    name: "Sofia",
                    avatar: "img/avatar_1.jpg",
                    lastAccess: "6.66",
                    lastMessage: {
                        date: "10/03/2023",
                    },
                    messages: [
                        {
                            text: "Ciao Sofia!",
                            date: "10/03/2023",
                        },
                        {
                            text: "Come stai?",
                            date: "10/03/2023",
                        },
                    ],
                },
                {
                    name: "Tizio Caio",
                    avatar: "img/avatar_3.jpg",
                    lastAccess: "6.66",
                    lastMessage: {
                        date: "10/03/2023",
                    },
                    messages: [
                        {
                            text: "Ciao Tizio!",
                            date: "10/03/2023",
                        },
                        {
                            text: "Tutto bene grazie, tu?",
                            date: "10/03/2023",
                        },
                    ],
                },
                {
                    name: "Giggio Basdiggio",
                    avatar: "img/avatar_4.jpg",
                    lastAccess: "6.66",
                    lastMessage: {
                        date: "10/03/2023",
                    },
                    messages: [
                        {
                            text: "Ciao Giggio!",
                            date: "10/03/2023",
                        },
                        {
                            text: "Come va?",
                            date: "10/03/2023",
                        },
                    ],
                },
                {
                    name: "Cristian Cosenza",
                    avatar: "img/avatar_4.jpg",
                    lastAccess: "6.66",
                    lastMessage: {
                        date: "10/03/2023",
                    },
                    messages: [
                        {
                            text: "Ciao,mi aiuti co gli esercizi?",
                            date: "10/03/2023",
                        },
                        {
                            text: "si",
                            date: "10/03/2023",
                        },
                    ],
                },
                {
                    name: "La pasta Amatriciana",
                    avatar: "img/avatar_4.jpg",
                    lastAccess: "6.66",
                    lastMessage: {
                        date: "10/03/2023",
                    },
                    messages: [
                        {
                            text: "Sei molto buona!",
                            date: "10/03/2023",
                        },
                        {
                            text: "Lo so",
                            date: "10/03/2023",
                        },
                    ],
                },
                {
                    name: "Gaetano frascolla",
                    avatar: "img/avatar_4.jpg",
                    lastAccess: "6.66",
                    lastMessage: {
                        date: "10/03/2023",
                    },
                    messages: [
                        {
                            text: "Ciao,mi aiuti co gli esercizi?",
                            date: "10/03/2023",
                        },
                        {
                            text: "Si",
                            date: "10/03/2023",
                        },
                    ],
                },
                {
                    name: "Fabio Giorgini",
                    avatar: "img/avatar_1.jpg",
                    lastAccess: "6.66",
                    lastMessage: {
                        date: "10/03/2023",
                    },
                    messages: [
                        {
                            text: "Ciao, mi aiuti con gli esercizi?",
                            date: "10/03/2023",
                        },
                        {
                            text: "Si",
                            date: "10/03/2023",
                        },
                    ],
                },
                {
                    name: "Fabio Giorgini",
                    avatar: "img/avatar_1.jpg",
                    lastAccess: "6.66",
                    lastMessage: {
                        date: "10/03/2023",
                    },
                    messages: [
                        {
                            text: "Ciao, mi aiuti con gli esercizi?",
                            date: "10/03/2023",
                        },
                        {
                            text: "Si",
                            date: "10/03/2023",
                        },
                    ],
                },
                {
                    name: "Fabio Giorgini",
                    avatar: "img/avatar_1.jpg",
                    lastAccess: "6.66",
                    lastMessage: {
                        date: "10/03/2023",
                    },
                    messages: [
                        {
                            text: "Ciao, mi aiuti con gli esercizi?",
                            date: "10/03/2023",
                        },
                        {
                            text: "Si",
                            date: "10/03/2023",
                        },
                    ],
                },
            ],
            activeContact: {
                name: "Fabio Giorgini",
                lastAccess: "6.66",
                messages: [
                    {
                        text: "Ciao,mi aiuti con gli esercizi?",
                        date: "10/03/2023",
                    },
                    {
                        text: "si",
                        date: "10/03/2023",
                    },
                ],
            },
        };
    },
    methods: {
        setActiveContact(contact) {
            this.activeContact = contact;
        },
    },
});
app.mount("#app");

//porto cose dal dom 

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const bodyMessage = document.querySelector('.body-message');

