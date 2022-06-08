<script>
export default {
  props: {
    imageSource: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <img alt="" :src="imageSource" />
</template>

<style>
img {
  width: 50vw;
}
</style>
