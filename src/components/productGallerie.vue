<template>
  <div>
    <div class="g_filter">
      <div class="g_cat">
        <input
          type="radio"
          name="p_category"
          id="all"
          value="all"
          :checked="category === 'all'"
          @change="setcategory"
          @click.stop=""
        />
        <label @click.stop="" for="all" class="radio-label"> ALL </label>
        <input
          type="radio"
          name="p_category"
          value="womens-jewellery"
          :checked="category === 'womens-jewellery'"
          id="cat2"
          @change="setcategory"
          @click.stop=""
        />
        <label @click.stop="" for="cat2" class="radio-label"> jewellery </label>
        <input
          type="radio"
          name="p_category"
          value="skincare"
          id="cat1"
          :checked="category === 'skincare'"
          @change="setcategory"
          @click.stop=""
        />
        <label @click.stop="" for="cat1" class="radio-label"> skincare </label>
      </div>
      <div class="g_search">
        <!-- <span class="g_search_text">search </span> -->
        <text-input v-model="query" :placeholder="'search'" :value="query" />
      </div>
      <div>
        <select name="sort" id="" value="" class="g_select" v-model="sort">
          <option value="" selected disabled>Sort By</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
    <div class="gallerie">
      <productCard v-for="item in cat_product" :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script>
import productCard from "@/components/productCard";
import { mapGetters } from "vuex";
export default {
  components: {
    productCard,
  },
  data() {
    const url_query = this.$route.query["category"] || "all";
    return {
      category: url_query,
      query: "",
      sort: "",
    };
  },
  methods: {
    setcategory(ev) {
      this.category = ev.target.value;
    },
  },
  computed: {
    ...mapGetters("products", ["products"]),
    cat_product() {
      let sortCall;
      if (this.sort === "rating") {
        sortCall = (a, b) => a.rating - b.rating;
      } else if (this.sort === "price") {
        sortCall = (a, b) => a.price - b.price;
      } else {
        sortCall = (a, b) => a.id - b.id;
      }
      if (this.category === "all")
        return this.products
          .filter((item) =>
            item.title.toLowerCase().includes(this.query.toLowerCase())
          )
          .sort(sortCall);
      return this.products
        .filter(
          (value) =>
            value.category === this.category &&
            value.title.toLowerCase().includes(this.query.toLowerCase())
        )
        .sort(sortCall);
    },
  },
};
</script>

<style>
.g_filter {
  display: flex;
  flex-direction: row;
  flex: 0.5rem;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #000;
  border-radius: 0.25rem;
  flex-wrap: wrap;
}
.gallerie {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  grid-template-rows: auto;
  grid-auto-columns: 150px;
  gap: 0.5rem;
  margin: 0.5rem;
  justify-items: center;
  justify-content: center;
}
.g_cat {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
}
.g_select {
  padding: 0.25rem;
  border-radius: 0.5em;
  border: 1px solid gray;
}

.radio-label {
  border-radius: 0.5rem;
  border: 1px solid #000;
  padding: 0.25rem;
  cursor: pointer;
  font-weight: bold;
}

input[type="radio"]:checked + .radio-label {
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
}

.g_cat input[type="radio"] {
  display: none;
}

.g_search {
  font-weight: bold;
}

.g_search input {
  width: 100%;
}
</style>
