<script>
import BrewList from "../components/BrewList.vue";
import MainPic from "../components/MainPic.vue";

export default {
  components: {
    BrewList,
    MainPic,
  },
};
</script>

<template>
  <div class="rootBox">
    <div class="header">
      <h1>Bryggerier</h1>
      <h3>som vi rekommenderar</h3>
      <MainPic image-source="../assets/beer-pub.jpeg" />
    </div>
    <BrewList id="brewList" />
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 1%;
}
h3 {
  margin-top: 0%;
}
#brewList {
  margin-left: 21vw;
}
</style>
