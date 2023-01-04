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
})

app.mount('#myApp')