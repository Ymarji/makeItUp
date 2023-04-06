<template>
  <section id="collection" class="section collection">
    <div class="collection__container">
      <div class="collection__box">
        <div class="collection__content bg_1">
          <div class="collection__data">
            <span>New Ring Introduced</span>
            <h1>JEWELLERY</h1>
            <router-link
              :to="{
                name: 'products',
                query: { category: 'womens-jewellery' },
              }"
            >
              SHOP NOW
            </router-link>
          </div>
        </div>
      </div>
      <div class="collection__box">
        <div class="collection__content bg_2">
          <div class="collection__data">
            <span>Phone Serums Introduced</span>
            <h1>SKIN-CARE</h1>
            <router-link
              :to="{ name: 'products', query: { category: 'skincare' } }"
              >SHOP NOW</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("products", ["featured"]),
  },
};
</script>

<style>
.collection__container {
  margin: 1.5rem 0.5rem;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}
.collection__box {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 1rem; */
  flex: 0 0 30%;
}
.collection__data h1 {
  white-space: nowrap;
}
.collection__data a {
  white-space: nowrap;
}
.img__container {
  width: 25rem;
  text-align: center;
}
.collection__content {
  aspect-ratio: 1;
  padding: 0.5rem;
  border-radius: 0.5rem;
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.collection__content.bg_1 {
  background-image: url("https://i.dummyjson.com/data/products/79/thumbnail.jpg");
  background-size: cover;
  border: 1px solid #000;
  color: white;
}
.collection__content.bg_1 a {
  color: white;
}
.collection__content.bg_2 {
  background-image: url("https://i.dummyjson.com/data/products/16/thumbnail.jpg");
  background-size: cover;
  border: 1px solid #000;
}
.collection__content.bg_2 a {
  color: black;
}
.collection__data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.collection__content a:link,
.collection__content a:visited {
  font-weight: 700;
  display: inline-block;
  padding: 1rem 1.4rem;
  margin-top: 1.3rem;
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

.collection__content a:hover {
  background-color: transparent;
  color: var(--secondaryColor);
}
.collection__box img.collection_01 {
  width: 60%;
}

.collection__box img.collection_02 {
  width: 60%;
}
</style>
