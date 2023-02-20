<template>
    <h2> Counter </h2>
    <p>{{ counter }}</p>
    <div>
        <span>
            <button @click="increaseButton">+ 1</button> <!-- Same that v-on:click -->
        </span>
        <span>
            <button @click="decreaseButton">- 1</button>
        </span>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
        counter: 0
        }
    },
    methods: {
        increaseButton() {
            this.counter++;
        },
        decreaseButton() {
            this.counter--;
        }
    }
}
</script>

<style>
    button {
        background-color: #4CAF50;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover {
        background-color: #3e8e41;
        transition: 0.3s ease-in-out;
    }
</style>