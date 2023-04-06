<template>
  <div class="payment-cont">
    <div class="payment-title" v-if="!trigger">
      <h1>Payment Information</h1>
    </div>
    <form class="form-container" @submit.prevent="onSubmit" v-if="!trigger">
      <div class="field-container">
        <label for="name">Name</label>
        <input
          class="input"
          required
          id="name"
          maxlength="20"
          type="text"
          v-model.trim="fullName"
        />
      </div>
      <div class="field-container">
        <label for="cardnumber">Card Number (16 digit)</label>
        <input
          class="input"
          required
          id="cardnumber"
          type="text"
          pattern="^[0-9]{16}$"
          inputmode="numeric"
          v-model="cardNumber"
          maxlength="16"
        />
      </div>
      <div class="field-container">
        <label for="expirationdate">Expiration (mm/yy)</label>
        <input
          class="input"
          required
          id="expirationdate"
          type="text"
          pattern="^(0[1-9]|1[0-2])/?([0-9]{2})$"
          inputmode="numeric"
          v-model="expireDate"
        />
      </div>
      <div class="field-container">
        <label for="securitycode">Security Code</label>
        <input
          class="input"
          required
          id="securitycode"
          type="text"
          pattern="[0-9]*"
          inputmode="numeric"
          v-model="ssc"
        />
      </div>
      <div></div>
      <button class="confirm" type="submit" :disabled="cart.length === 0">
        Confirme
      </button>
    </form>
    <conclusionComp :data="conslusion" v-if="trigger"></conclusionComp>
  </div>
</template>

<script>
import conclusionComp from "@/components/conclusionComp";
import { mapState } from "vuex";
export default {
  components: {
    conclusionComp,
  },
  data() {
    return {
      cardNumber: "",
      fullName: "",
      expireDate: "",
      ssc: "",
      conslusion: [],
      trigger: false,
    };
  },
  methods: {
    onSubmit() {
      if (
        this.cardNumber !== "" &&
        this.fullName !== "" &&
        this.expireDate !== "" &&
        this.ssc != ""
      ) {
        this.conslusion = [...this.$store.state.cart.cart];
        this.$store.dispatch("cart/clear");
        this.trigger = true;
      }
    },
  },
  computed: {
    ...mapState("cart", ["cart"]),
  },
};
</script>

<style>
.payment-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.confirm {
  grid-area: button;
  padding: 0.5rem 1.5rem;
  border: 2px black solid;
  color: black;
  background-color: transparent;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}

.confirm:hover {
  color: white;
  background-color: #000;
  border-color: #000;
}
.form-container .field-container:first-of-type {
  grid-area: name;
}

.form-container .field-container:nth-of-type(2) {
  grid-area: number;
}

.form-container .field-container:nth-of-type(3) {
  grid-area: expiration;
}

.form-container .field-container:nth-of-type(4) {
  grid-area: security;
}

.field-container .input {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.field-container {
  position: relative;
}

.form-container {
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: auto auto;
  grid-template-rows: 90px 90px 90px;
  grid-template-areas: "name name" "number number" "expiration security" "button button";
  max-width: 400px;
  padding: 20px;
  color: #707070;
}

label {
  padding-bottom: 5px;
  font-size: 13px;
}

.input {
  margin-top: 3px;
  padding: 15px;
  font-size: 16px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #dcdcdc;
}

.ccicon {
  height: 38px;
  position: absolute;
  right: 6px;
  top: calc(50% - 17px);
  width: 60px;
}
</style>
