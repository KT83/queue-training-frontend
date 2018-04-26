<template>
  <div class="hello">
    <h1>Ajax sample</h1>
    <div class="container">
      <div class="row">
        <div v-for="data in news" class="col-sm-4">
          <div class="card" style="width: 100%;">
            <img class="card-img-top" alt="Card image cap" :src="data.img_url">
            <div class="card-body">
              <h5 class="card-title my-card-title"> {{ data.title }} </h5>
              <p class="card-text">{{ data.text }} </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      news: []
    }
  },
  created () {
    axios.get('http://localhost:3003/news')
    .then((response) => {
      console.log(response.data)
      this.news = response.data 
    })
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-card-title{
  text-align: left;
}
</style>
