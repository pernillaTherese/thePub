<script>
import MainPic from "../components/MainPic.vue";

export default {
  components: {
    MainPic,
  },
};
</script>

<template>
  <div class="header">
    <h1>Välkommen!</h1>
    <MainPic image-source="../assets/beer-monkey.jpeg" />
  </div>
</template>

<style scoped>
img {
  width: 80vw;
}
</style>
