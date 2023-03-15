<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Counter v-bind:start="10*10" book-title="Entered"/>
    <Counter :start="10" book-title="Entered 2"/> -->  <!-- Same as v-bind:start -->
    <Indecision/>

</template>

<script>
// import Counter from '@/components/Counter.vue';
import Indecision from '@/components/Indecision.vue';

export default {
    name: 'App',
    components: {
        // Counter,
        Indecision
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
