<script>
export default {};
</script>

<template>
  <nav id="navBox">
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/breweries">Tips på Bryggerier</RouterLink>
      </li>
      <li>
        <RouterLink to="/pub">Gå till puben</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
#navBox {
  display: flex;
  height: 10vh;
  padding-top: 2em;
}
</style>
