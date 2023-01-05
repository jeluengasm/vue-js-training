const app = Vue.createApp({
    // template: `
    // <h1>Hello world</h1>
    // <p>{{ [{a:1},{b:2},{c:3},{d:4}] }}</p>
    // `
    data() { // Create variables using Options API
        return {
            message: 'Hello world using Vue.js',
            author: 'Bruce Wayne',

        }
    },
    methods: {
        changeAuthor(event) {
            console.log('Hello world', event)
            this.author = 'John Doe'
            console.log(event.target.dataset.id)
            this.capitalize()
        },
        capitalize() {
            this.author = this.author.toUpperCase()
        },
    },
})

app.mount('#myApp')