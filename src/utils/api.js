import axios from "axios";

const api = {
  login(payload) {
    return axios.get("/login", payload);
  },

  register(payload) {
    return axios.post("/register", payload);
  },
};

export default api;
