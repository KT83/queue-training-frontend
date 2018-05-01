<template>
  <div class="card">
    <h3>{{ heading }}</h3>
    <p>{{ text }}</p>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['heading', 'text']
}
</script>
<style>
.card {
  padding: 32px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.20);
}
</style>