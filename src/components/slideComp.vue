<template v-show="featured">
  <div class="p_slide">
    <img :src="featured?.thumbnail" alt="" class="p_thump" />
    <div class="p_info">
      <p class="p_title">{{ featured?.title }}</p>
      <p class="p_desc">{{ featured?.description }}</p>
      <button-comp
        class="p_button"
        :reverse="true"
        @click.prevent="shop(featured)"
      >
        Shop Now
      </button-comp>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import buttonComp from "./shared/buttonComp.vue";
export default {
  components: { buttonComp },
  computed: {
    ...mapGetters("products", ["featured"]),
  },
  methods: {
    shop(item) {
      this.$router.push(`/description/${item.id}`);
    },
  },
};
</script>

<style>
.p_slide {
  position: relative;
  text-align: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin: 0.5rem;
}
.p_info {
  border-radius: 0.5rem;
  bottom: 0;
  position: absolute;
  height: 40%;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  color: white;
  text-align: left;
}

.p_title {
  margin-top: 2.5rem;
  padding: 0.25rem;
  font-weight: bold;
}

.p_desc {
  left: 10%;
  padding: 0.25rem;
}

.p_button {
  display: block;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  max-width: 250px;
}
</style>
