<template>
    <img v-if="img" :src="img" alt="bg">
    <div class="bg-dark"></div>
    <div class="indecision-container">
        <input
        type="text"
        v-model="question"
        placeholder="Ask me">
        <p>Remember to place the question mark (?)</p>
        <div v-if="isValidQuestion">
            <h2>{{ question }}</h2>
            <h1>{{ answer }}</h1>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            question: null,
            answer: null,
            img: "https://placekitten.com/1000/1000",
            isValidQuestion: false
        }
    },
    watch: {
        question(newQuestion, oldQuestion) {
            this.isValidQuestion = false
            if (!newQuestion.includes('?')) return
            this.isValidQuestion = true
            this.getAnswer()
        }
    },
    methods: {
        async getAnswer() {
            this.answer = 'Thinking...'
            const {answer, image} = await fetch('https://yesno.wtf/api')
                .then(res => res.json())
            this.answer = answer.toUpperCase()
            this.img = image
        }
    }
}
</script>

<style scoped>
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }
</style>