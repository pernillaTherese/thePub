<script>
export default {
  created() {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((response) => response.json())
      .then((breweries) => {
        this.breweries = breweries;
      });
  },
  data() {
    return {
      breweries: null,
    };
  },
};
</script>

<template>
  <ol>
    <li :key="brewery.id" v-for="brewery in breweries">{{ brewery.name }}</li>
  </ol>
</template>

<style>
ol {
  font-weight: bold;
  line-height: 1.5em;
}
</style>
