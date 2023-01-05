<template>
  <h2> Counter </h2>
  <p>{{ counter }} <sup>2</sup> = {{ getSquareValue() }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
</template>

<script>
export default {
    data() {
        return {
            counter: 5
        }
    },
    methods: { // Traditional method. Doesn't uses cache
        getSquareValue() {
            return this.counter * this.counter
        }
    },
    computed: { // Uses cache
        squareCounter() {
            return this.counter * this.counter
        }
    }
}
</script>

<style>

</style>