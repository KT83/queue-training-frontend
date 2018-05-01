<template>
  <div id="app">
    <app-header :logoText="'SampleSite'"></app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/parts/Header.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
html, body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 0;
  color: #444;
}
</style>
