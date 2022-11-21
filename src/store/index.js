/* eslint-disable no-unused-vars */
import { createStore } from "vuex";
import router from "@/router";
import api from "@/utils/api";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    login({ commit }, payload) {
      api
        .login({
          payload,
        })
        .then((response) => {
          if (response.status === 200) {
            router.push({ name: "profile" });
          }
        })
        .catch((error) => {
          alert(error);
        });
    },
    register({ commit }, payload) {
      console.log("p", payload);
      api
        .register({
          payload,
        })
        .then((response) => {
          if (response.status === 201) {
            router.push({ name: "profile" });
          }
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
  modules: {},
});
