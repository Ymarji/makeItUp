import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

export const urls = [
  "https://dummyjson.com/products/category/womens-jewellery",
  "https://dummyjson.com/products/category/skincare",
];

Vue.use(Vuex);

const productsModule = {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    featured(state) {
      return state.products[0];
    },
    products(state) {
      return state.products;
    },
    getItemById: (state) => (id) => {
      console.log(state.products.find((item) => item.id === id));
      return state.products.find((item) => item.id === id);
    },
  },
  mutations: {
    SET_PRODUCTS(state, { products }) {
      state.products = [...products];
    },
    ADD_PRODUCTS(state, products) {
      state.products = state.products.concat(products);
    },
  },
  actions: {
    getProduct({ commit }) {
      const requests = urls.map((url) => axios.get(url));
      axios.all(requests).then((responses) => {
        const data = [];
        responses.map((res) => data.push(...res.data.products));
        console.log(data);
        commit("ADD_PRODUCTS", data);
      });

      // .get("https://dummyjson.com/products/category/skincare")
      // .then((data) => commit("SET_PRODUCTS", data.data));
    },
  },
};

const cartModule = {
  namespaced: true,
  state: {
    cart: [],
  },
  getters: {
    cartLenght(state) {
      return state.cart.length;
    },
    totalItems(state) {
      return state.cart.reduce((sum, elm) => {
        sum += elm.quantity;
        return sum;
      }, 0);
    },
    totalPrice(state) {
      return state.cart.reduce((sum, elm) => {
        sum += elm.quantity * elm.item.price;
        return sum;
      }, 0);
    },
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const item = state.cart.filter((val) => val.item?.id === payload.id);
      if (item.length === 0) {
        state.cart = [...state.cart, { item: payload, quantity: 1 }];
      } else {
        state.cart = state.cart.map((elm) => {
          if (elm.item.id === payload.id) {
            elm.quantity++;
          }
          return elm;
        });
      }
    },
    DELETE_FROM_CART(state, { id }) {
      console.log("id", id);
      if (id) {
        state.cart = state.cart.filter((value) => value.item.id !== id);
        state.totalItems--;
      }
    },

    CLEAR(state) {
      state.cart = [];
    },
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("ADD_TO_CART", payload);
    },
    deleteFromCart({ commit }, payload) {
      commit("DELETE_FROM_CART", payload);
    },
    clear({ commit }) {
      commit("CLEAR");
    },
  },
};

const userModule = {
  namespaced: true,
  state: {
    user: null,
    isLogged: false,
  },
  getters: {},
  mutations: {
    LOGIN(state, payload) {
      state.isLogged = true;
      state.user = payload;
    },
    SIGNOUT(state) {
      state.isLogged = false;
      state.user = null;
    },
  },
  actions: {
    login({ commit }, payload) {
      commit("LOGIN", payload);
    },
    signout({ commit }) {
      commit("SIGNOUT");
    },
  },
};
export default new Vuex.Store({
  state: {
    cach: [],
  },
  getters: {},
  mutations: {
    SET(state, payload) {
      state.cach = [...payload];
    },
  },
  actions: {
    setCach({ commit }, payload) {
      commit("SET", payload);
    },
  },
  modules: { products: productsModule, cart: cartModule, user: userModule },
});
