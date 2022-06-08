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
    <h1>Du dricker {{ $store.state.drinkChoice }}!</h1>
    <h2>*** Njuuuuut! ***</h2>
    <MainPic image-source="../assets/beer-drink.jpeg" />
  </div>
</template>
