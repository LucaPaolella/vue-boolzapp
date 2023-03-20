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
                            from: "me",
                            date: "10/03/2023",
                        },
                        {
                            text: "Come stai?",
                            from: "you",
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
                            from: "me",
                            date: "10/03/2023",
                        },
                        {
                            text: "Tutto bene grazie, tu?",
                            from: "you",
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
                            from: "me",
                            date: "10/03/2023",
                        },
                        {
                            text: "Come va?",
                            from: "you",
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
                            from: "me",
                            date: "10/03/2023",
                        },
                        {
                            text: "si",
                            from: "you",
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
                            from: "me",
                            date: "10/03/2023",
                        },
                        {
                            text: "Lo so",
                            from: "you",
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
                            from: "me",
                            date: "10/03/2023",
                        },
                        {
                            text: "Si",
                            from: "you",
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
                            from: "me",
                            date: "10/03/2023",
                        },
                        {
                            text: "Si",
                            from: "you",
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
                            from: "me",
                            date: "10/03/2023",
                        },
                        {
                            text: "Si",
                            from: "you",
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
                            from: "me",
                            date: "10/03/2023",
                        },
                        {
                            text: "Si",
                            from: "you",
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
                        from: "me",
                        date: "10/03/2023",
                    },
                    {
                        text: "si",
                        from: "you",
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

        sendMessage() {
            if (this.message.trim() === "") {
                return;
            };
            const message = {
                text: this.message,
                from: "me",
                date: new Date().toLocaleString(),
                };
                this.activeContact.messages.push(message);
                this.message
        },

        AddMessage() {
            if (this.sendMessage() === true){
                const message = {
                    text: "Ok",
                    from: "you",
                    date: new Date().toLocaleString(),
                    };
                    this.activeContact.messages.push(message);
                this.message
            }
        }
    },
}); app.mount("#app");

