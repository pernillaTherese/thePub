<script>
import NavList from "./components/NavList.vue";

export default {
  components: { NavList },
};
</script>

<template>
  <NavList />
  <main>
    <RouterView />
  </main>
</template>
