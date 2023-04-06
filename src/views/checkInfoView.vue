<template>
  <div class="checkout-info-container">
    <div class="c-i-title" v-if="!trigger">
      <h1>Enter your information</h1>
    </div>
    <form action="" class="c-i-form" @submit.prevent="onSubmit" v-if="!trigger">
      <div class="input-container">
        <label for="first-name" class="label"> first name </label>
        <input
          required
          type="text"
          id="first-name"
          placeholder="First name"
          v-model="firstName"
        />
      </div>
      <div class="input-container">
        <label for="last-name" class="label"> last name </label>
        <input
          required
          type="text"
          id="last-name"
          placeholder="Last name"
          v-model="lastName"
        />
      </div>
      <div class="input-container">
        <label for="adresse" class="label"> Adresse </label>
        <input
          required
          type="text"
          id="adresse"
          placeholder="Adresse"
          v-model="adresse"
        />
      </div>
      <div class="input-container">
        <label for="contry" class="label"> Contry </label>
        <input
          required
          type="text"
          id="contry"
          placeholder="Contry"
          v-model="contry"
        />
      </div>
      <div class="input-container">
        <label for="city" class="label"> City </label>
        <input
          required
          type="text"
          id="city"
          placeholder="City"
          v-model="city"
        />
      </div>
      <div class="input-container">
        <label for="zipcode" class="label"> Zipcode </label>
        <input
          required
          type="text"
          id="zipcode"
          placeholder="Zipcode"
          v-model="zipcode"
        />
      </div>
      <div class="input-container">
        <label for="province" class="label"> Province </label>
        <input
          required
          type="text"
          id="province"
          placeholder="Province"
          v-model="province"
        />
      </div>
      <div class="input-container">
        <label for="cname" class="label"> Card holder name </label>
        <input
          required
          type="text"
          id="cname"
          placeholder="holder name"
          v-model="cardName"
        />
      </div>
      <div class="input-container">
        <label for="expire" class="label"> Expire at (mm/yy) </label>
        <input
          required
          type="text"
          id="expire"
          pattern="^(0[1-9]|1[0-2])/?([0-9]{2})$"
          placeholder="Expire date"
          v-model="cardNumber"
        />
      </div>
      <div class="input-container">
        <label for="ccv" class="label"> Security code </label>
        <input required type="text" id="ccv" placeholder="CCV" v-model="ccv" />
      </div>
      <div class="input-container">
        <label for="cnumber" class="label"> Card number </label>
        <input
          required
          type="text"
          id="cnumber"
          placeholder="Card number"
          v-model="expireDate"
        />
      </div>
      <button class="confirm" type="submit">Confirme</button>
      <div class="separator">
        <div class="separator-line"></div>
        Card info
        <div class="separator-line"></div>
      </div>
    </form>
    <ul class="errors" v-if="errors.length">
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
    <conclusionComp :data="conslusion" v-if="trigger"></conclusionComp>
  </div>
</template>

<script>
import { mapState } from "vuex";
import conclusionComp from "@/components/conclusionComp";

export default {
  components: {
    conclusionComp,
  },
  data() {
    return {
      errors: [],
      firstName: null,
      lastName: null,
      contry: null,
      city: null,
      adresse: null,
      zipcode: null,
      province: null,
      cardName: null,
      cardNumber: null,
      ccv: null,
      expireDate: null,
      conslusion: [],
      trigger: false,
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];
      Object.keys(this.$data).forEach((key) => {
        if (this.$data[key] === null) {
          const result = key.replace(/([A-Z])/g, " $1");
          const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
          this.errors.push(`${finalResult} field is required`);
        }
      });
      if (this.errors.length === 0) {
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
.checkout-info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkout-info-container .errors {
  color: red;
  list-style-type: "*";
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  padding: 0.5rem;
}
.checkout-info-container .c-i-form {
  width: 100%;
  max-width: 740px;
  margin: auto;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: auto auto;
  padding: 0.5rem;
  gap: 1rem;
  grid-template-areas:
    "firstname lastname adresse adresse"
    "contry city zipcode province"
    "br br br br"
    " cname cname expire ccv"
    " cnumber cnumber botton botton";
  align-items: end;
}

.checkout-info-container .c-i-form .input-container {
  display: flex;
  flex-direction: column;
}

.c-i-form .input-container:first-child {
  grid-area: firstname;
}

.c-i-form .input-container:nth-child(2) {
  grid-area: lastname;
}
.c-i-form .input-container:nth-child(3) {
  grid-area: adresse;
}
.c-i-form .input-container:nth-child(4) {
  grid-area: contry;
}
.c-i-form .input-container:nth-child(5) {
  grid-area: city;
}
.c-i-form .input-container:nth-child(6) {
  grid-area: zipcode;
}
.c-i-form .input-container:nth-child(7) {
  grid-area: province;
}
.c-i-form .input-container:nth-child(8) {
  grid-area: cname;
}
.c-i-form .input-container:nth-child(9) {
  grid-area: expire;
}
.c-i-form .input-container:nth-child(10) {
  grid-area: ccv;
}
.c-i-form .input-container:nth-child(11) {
  grid-area: cnumber;
}
.c-i-form button.confirm {
  grid-area: botton;
}
.c-i-form div.separator {
  grid-area: br;
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  align-items: center;
}
.c-i-form div.separator .separator-line {
  border: 1px solid #000;
  flex-grow: 1;
}

.confirm {
  padding: 0.5rem 1.5rem;
  border: 2px black solid;
  color: white;
  background-color: #000;
  border-color: #000;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}

.confirm:hover {
  color: black;
  background-color: #fff;
  border-color: #000;
}
.c-i-form .input-container input {
  padding: 0.5rem;
  border-radius: 0.25rem;
}

label {
  font-weight: bold;
}
@media only screen and (max-width: 1024px) {
  .checkout-info-container .c-i-form {
    max-width: 450px;
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: auto auto;
    /* padding: 20px; */
    gap: 1rem;

    grid-template-areas:
      "firstname lastname "
      "contry city"
      "adresse adresse"
      " zipcode province"
      "br br"
      " cname cname"
      " expire ccv"
      " cnumber cnumber "
      "botton botton";
    align-items: center;
  }
}
</style>
