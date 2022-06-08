<script>
export default {
  data() {
    return {
      choosenDrink: this.textvalue,
    };
  },
  props: {
    textValue: {
      type: String,
      default: "someDrink",
    },
  },
};
</script>

<template>
  <h1>{{ textValue }}</h1>
</template>
