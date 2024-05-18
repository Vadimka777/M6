<script setup>
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";
import Card from "./components/Card.vue"
</script>
<template>
  <div class="app">
    <Header />
    <RouterView />
    <Card />
  </div>
</template>

<style scoped>
.app {
  background-color: #474747;
  min-height: 100vh;
}
</style>
