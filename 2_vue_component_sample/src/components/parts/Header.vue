<template>
  <div class="header-area">
    <p class="header-logo">{{ logoText }}</p>
  </div>
</template>
<script>
export default {
  props: ['logoText']
}
</script>
<style>
.header-area {
  display:flex;
  justify-content:space-between;
  box-shadow: 0 10px 20px rgba(0,0,0,0.10);
  z-index: 100;
}
.header-logo {
  font-size: 2.4rem;
  margin: 16px;
  letter-spacing: 0.12rem;
  color: #888;
}
</style>