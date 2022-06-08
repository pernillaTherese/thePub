import { createStore } from "vuex";

const mutations = {
    updateDrink(state, drinkChoice) {
      state.drinkChoice = drinkChoice;
    },
    updateToast(state, toastChoice) {
      state.toastChoice = toastChoice;
    },
  },
  state = {
    drinkChoice: "",
    toastChoice: "",
  };

export default createStore({ mutations, state, strict: true });
