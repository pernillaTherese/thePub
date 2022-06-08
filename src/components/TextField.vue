<script>
  export default {
    props: {
      hint: String,
      choice: String,
    },
  };
</script>

<template>
  <input v-model="choice" :placeholder="hint" />
</template>
