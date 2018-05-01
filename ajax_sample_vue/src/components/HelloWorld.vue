<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
    <h2>{{ greeting }}</h2>
    <!-- <button @click="helloToConsole">Say hello</button>
    <button @click="helloTime">What time?</button> -->
  </div>
</template>
<script>
export default {
  props: [],
  data: () => {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: 'Hello,we are Queue.',
      hello: 'Hello',
      queue: 'we are Queue',
    }
  },
  methods: {
    helloToConsole() {
        console.log('hello world')
      }
  },
  computed: {
    greeting () {
      return this.hello + this.queue
    }
  },
  watch: {},
  created: {},
  mounted: function () {
    console.log(String(this.hello))
    console.log(this.queue)
    console.log(this.hello + this.queue)
    console.log(this.greeting)
  }
}
</script>