<script>
import MainPic from "../components/MainPic.vue";

export default {
  data() {
    return {
      toastYes: false,
    };
  },
  components: {
    MainPic,
  },
  computed: {
    drinkChoice: {
      get() {
        return this.$store.state.drinkChoice;
      },
      set(value) {
        this.$store.commit("updateDrink", value);
      },
    },
    toastChoice: {
      get() {
        return this.$store.state.toastChoice;
      },
      set(value) {
        this.$store.commit("updateToast", value);
      },
    },
  },
};
</script>

<template>
  <div id="rootBox">
    <div class="header">
      <h1>Välkommen till Puben</h1>
      <MainPic image-source="../assets/beer-pub.jpeg" />
    </div>

    <div class="form">
      <label for="drink">Vad vill du dricka?</label>
      <br />
      <input v-model="drinkChoice" placeholder="Ex. öl vin mjölk" />
    </div>

    <div class="form">
      <span>
        <input type="checkbox" v-model="toastYes" />
        <label>Jag vill utbringa en skål för...</label>
        <br />
      </span>
      <textarea
        v-if="toastYes"
        v-model="toastChoice"
        placeholder="Ex. min knasiga katt"
      />
    </div>

    <div class="buttonBox">
      <RouterLink v-if="toastYes" to="toast">
        <button
          :disabled="drinkChoice.length === 0 || toastChoice.length === 0"
        >
          SKÅLA
        </button>
      </RouterLink>

      <RouterLink v-else-if="!toastYes" to="drink">
        <button :disabled="drinkChoice.length === 0">DRICK</button>
      </RouterLink>
    </div>
  </div>
</template>

<style>
#rootBox {
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-between;
  align-items: stretch;
  padding-left: 30vw;
  padding-right: 30vw;
  padding-bottom: 30vh;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  margin: 50px 5px 0px 5px;
}

.buttonBox {
  display: flex;
  justify-content: center;
}
button {
  background-color: orange;
  width: 200px;
  height: 50px;
  border-radius: 15px;
  margin-top: 50px;
  font-size: large;
}
</style>
