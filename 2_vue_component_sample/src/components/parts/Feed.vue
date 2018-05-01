<template>
  <div class="feed">
    <h2>Feed</h2>
    <div v-for="item in cardData" class="card-wrapper">
      <card :heading="item.heading" :text="item.text"></card>
    </div>
  </div>
</template>
<script>
import Card from './Card.vue'
export default {
  name: 'Feed',
  components: {
    Card
  },
  data: () => {
    return {
      cardData: [
        {
          heading: 'Heading1',
          text: 'text1'
        },
        {
          heading: 'Heading2',
          text: 'text2'
        },
        {
          heading: 'Heading3',
          text: 'text3'
        },
        {
          heading: 'Heading4',
          text: 'text4'
        }
      ]
    }
  }
}
</script>
<style>
.feed {
  padding: 32px;
}
.card-wrapper {
  padding: 32px;
}
</style>