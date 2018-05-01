<template>
  <div class="home">
    <div class="content-area">
      <feed></feed>
    </div>
    <div class="side-area">
      <side-menu></side-menu>
    </div>
  </div>
</template>

<script>
import Feed from '@/components/parts/Feed.vue'
import SideMenu from '@/components/parts/SideMenu.vue'

export default {
  name: 'Home',
  components: {
    Feed,
    SideMenu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
}
.content-area {
  flex: 4;
}
.side-area {
  flex: 1;
}
</style>
