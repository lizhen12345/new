<template>
  <div id="app">
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="incrementAsync">延时增加</button>
    <button @click="reset">重置</button>
    <p>{{count}}</p>
    <p>{{isEvenOdd}}</p>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["count", "isEvenOdd"])
  },
  methods: {
    ...mapActions(["increment", "decrement", "incrementAsync",'reset'])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
