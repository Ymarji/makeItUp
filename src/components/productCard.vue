<template>
  <div class="p_card">
    <img :src="item?.thumbnail" alt="" class="p_c_image" />
    <div class="p_c_title">{{ item?.title }}</div>
    <div class="p_c_info">
      <div class="p_c_brand">{{ item?.brand }}</div>
      <div class="p_c_price">{{ item?.price }} $</div>
    </div>
    <div class="p_c_links">
      <button-comp
        class="p_c_button"
        :class="{ p_c_b_selected: isAdd }"
        @click="addClick"
      >
        <span style="font-size: 0.8rem" v-show="isAdd">&#10004;</span>
        {{ isAdd ? "Added to bag" : "Add to cart" }}
      </button-comp>
      <a href="#" @click.prevent="productDetail">details</a>
    </div>
  </div>
</template>

<script>
import buttonComp from "./shared/buttonComp.vue";
export default {
  components: { buttonComp },
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      isAdd: false,
    };
  },
  methods: {
    addClick() {
      if (!this.isAdd) {
        this.isAdd = true;
        this.$store.dispatch("cart/addToCart", this.item);
      }
    },
    productDetail() {
      this.$router.replace(`/description/${this.item?.id}`);
    },
  },
};
</script>

<style>
.p_card {
  max-width: 300px;
  text-align: center;
  font-family: arial;
  display: flex;
  /* gap: 0.5rem; */
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.p_card {
  /* padding: 0.5rem; */
  /* border: 1px solid black; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  width: 250px;
  overflow: hidden;
}
.p_c_image {
  /* width: 225px; */
  width: 100%;
  /* scale: 1.2; */
  aspect-ratio: 16 / 14;
}
.p_c_brand {
  font-size: 0.7rem;
}
.p_c_button {
  color: black;
  border-color: black;
  /* width: 90%; */
  margin: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.p_c_button:hover,
.p_c_b_selected {
  color: white;
  background-color: black;
  border-color: white;
}
.p_c_info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
.p_c_links {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.p_c_links a {
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: underline;
  color: black;
}
.p_c_links a:hover {
  opacity: 0.7;
}
</style>
