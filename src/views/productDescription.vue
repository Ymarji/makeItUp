<template>
  <div class="p_f_desc">
    <div class="image_container">
      <img :src="image_s" alt="" class="p_image_cont" />
      <div class="p_images_box">
        <img
          v-for="(img, index) in product?.images"
          :src="img"
          alt=""
          :key="index"
          class="p_images"
          @mouseover="setImage(img)"
        />
      </div>
    </div>
    <div class="desc_coontainer">
      <p class="p_title">{{ product?.title }}</p>
      <p class="p_description">{{ product?.description }}</p>
      <br />
      <p class="p_price">Price: {{ product?.price }} $</p>
      <p class="p_price">
        Rating:
        <StarRating
          :star-size="20"
          :increment="0.01"
          :fixed-points="2"
          :rating="product?.rating"
          :read-only="true"
        />
      </p>

      <br />
      <button-Comp @click.stop="addClick" class="desc_button">
        add to cart
      </button-Comp>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StarRating from "vue-star-rating";
export default {
  components: { StarRating },
  props: ["id"],
  methods: {
    setImage(img) {
      this.image_s = img;
    },
    addClick() {
      this.$store.dispatch("cart/addToCart", this.product);
    },
  },
  computed: {
    ...mapGetters("products", ["getItemById"]),
  },
  data() {
    return { product: null, image_s: null };
  },
  created() {
    this.product = this.getItemById(+this.$props.id);
    this.image_s = this.product?.thumbnail;
  },
};
</script>

<style>
.p_f_desc {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin: 0.5rem;
  gap: 2rem;
}

.p_image_cont {
  max-width: 400px;
  height: 400px;
  border: 1px solid gray;
  border-radius: 0.25rem;
  align-items: center;
  aspect-ratio: 1;
}
.image_container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.image_container .p_images_box {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  overflow-x: auto;
}
.image_container .p_images_box .p_images {
  aspect-ratio: 1;
  width: 20%;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 0.25rem;
}
.desc_coontainer {
  text-align: left;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.desc_coontainer .p_price {
  /* align-self: flex-end; */
  margin-right: 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  /* display: flex; */
}
.desc_coontainer .p_title {
  margin-right: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.desc_button {
  align-self: flex-end;
}
</style>
