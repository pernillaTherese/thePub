<script>
import MainPic from "../components/MainPic.vue";
export default {
  components: {
    MainPic,
  },
};
</script>

<template>
  <div class="rootBox">
    <div class="header">
      <h1>Skål för {{ $store.state.toastChoice }}!</h1>
      <MainPic image-source="../assets/beer-toast.jpeg" />
    </div>

    <div class="buttonBox">
      <RouterLink to="drink">
        <button>DRICK</button>
      </RouterLink>
    </div>
  </div>
</template>
