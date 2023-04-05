<template>
  <div v-show="true" class="c_modal">
    <button-comp class="button m_button" @click="navigate">
      Show Cart
    </button-comp>
    <div v-for="item in cart" :key="item.item.id" class="cart_card">
      <span @click="deleteItem(item)">
        <font-awesome-icon :icon="['far', 'trash-can']" class="m_delete" />
      </span>
      <img :src="item.item.thumbnail" alt="" class="m_image" />
      <span class="m_i_title"> {{ item.item.title }} </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import buttonComp from "./shared/buttonComp.vue";

export default {
  components: {
    "button-comp": buttonComp,
  },
  computed: {
    ...mapState("cart", ["cart"]),
  },
  methods: {
    deleteItem({ item }) {
      this.$store.dispatch("cart/deleteFromCart", item);
    },
    navigate() {
      if (this.$router.currentRoute.name !== "cart") this.$router.push("/cart");
    },
  },
};
</script>

<style>
.m_image {
  width: 40%;
}
.c_modal {
  border: 1px solid #000;
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: white;
  width: 260px;
  height: 360px;
  z-index: 9999;
  overflow: auto;
  padding: 0.5rem;
}

.c_modal {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: initial;
}

.cart_card {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: 1px solid #000;
}

.m_i_title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.m_delete {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  /* border: medium solid red; */
  /* color: red; */
  border-radius: 9999px;
  background-color: white;
  font-size: 0.8rem;
  cursor: pointer;
  scale: 1.5;
}
.m_button {
  color: #000;
  border-color: #000;
  /* margin-top: auto; */
}
</style>
