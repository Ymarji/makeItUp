<template>
  <div class="cart_cont">
    <div class="c_items_list">
      <ul class="c_item_cont list_header">
        <li class="c_item_elm"></li>
        <li class="c_item_elm">title</li>
        <li class="c_item_elm">price</li>
        <li class="c_item_elm">quantity</li>
        <li class="c_item_elm">remove</li>
        <li class="c_item_elm">total</li>
      </ul>
      <!-- <br /> -->
      <div class="c_item_cont c_it_ph" v-if="cart.length === 0">EMPTY</div>
      <ul class="c_item_cont" v-for="(elm, index) in cart" :key="index">
        <li class="c_item_elm">
          <img
            :src="elm.item.thumbnail"
            :alt="elm.item.title"
            class="c_item_image"
          />
        </li>
        <li class="c_item_elm">{{ elm.item.title }}</li>
        <li class="c_item_elm">{{ elm.item.price }} $</li>
        <li class="c_item_elm">
          <input
            type="number"
            min="0"
            :max="elm.item.stock"
            v-model.number="elm.quantity"
          />
        </li>
        <li class="c_item_elm">
          <div class="product-removal">
            <button class="product-action" @click="remove(elm)">Remove</button>
          </div>
        </li>
        <li class="c_item_elm">{{ elm.quantity * elm.item.price }} $</li>
      </ul>
    </div>
    <div class="cart_sommer">
      Total:
      <div>
        <span>Item number :</span><span> {{ totalItems }} </span>
      </div>
      <div>
        <span>Price :</span><span> {{ totalPrice }} $ </span>
      </div>
      <button
        class="product-action checkout"
        @click="checkout"
        :disabled="cart.length === 0"
      >
        check-out
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["totalItems", "totalPrice"]),
  },
  methods: {
    ...mapActions("cart", ["deleteFromCart"]),
    remove({ item }) {
      this.deleteFromCart(item);
    },
    checkout() {
      this.$router.push("/checkout");
    },
  },
};
</script>

<style>
.cart_cont {
  margin: 0.5rem;
  background: whitesmoke;
  padding: 0.5rem;
}

.cart_cont .list_header {
  font-size: 0.8rem;
  font-weight: bold;
  font-style: italic;
}
.c_item_cont {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
}

.c_item_cont {
  list-style-type: none;
  padding: 0.25rem;
  border: 1px solid #000;
  border-radius: 0.25rem;
  background: white;
}
.c_item_cont.c_it_ph {
  padding: 1rem;
}
.c_item_cont .c_item_elm {
  flex: 1;
}
.cart_cont .c_item_image {
  border: 1px solid #000;
  border-radius: 0.25rem;
  width: 100px;
}
.product-action {
  border: 0;
  padding: 4px 8px;
  background-color: #c66;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  border-radius: 3px;
  cursor: pointer;
}

.product-action:hover {
  background-color: #a44;
}

.cart_sommer {
  text-align: left;
  padding: 0.5rem;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: white;
  margin: 0.5rem;
  border: 1px solid #000;
  border-radius: 0.25rem;
  font-weight: bold;
}

.checkout {
  background-color: rgb(102, 204, 131);
  margin: auto;
}
.checkout:hover {
  background-color: rgb(68, 170, 100);
}
.checkout:disabled {
  background-color: rgb(168, 172, 176);
  cursor: not-allowed;
}
</style>
