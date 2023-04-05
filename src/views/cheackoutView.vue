<template>
  <div class="payment-cont">
    <div class="payment-title">
      <h1>Payment Information</h1>
    </div>
    <form class="form-container" @submit.prevent="">
      <div class="field-container">
        <label for="name">Name</label>
        <input
          required
          id="name"
          maxlength="20"
          type="text"
          v-model="fullName"
        />
      </div>
      <div class="field-container">
        <label for="cardnumber">Card Number</label
        ><span id="generatecard">generate random</span>
        <input
          required
          id="cardnumber"
          type="number"
          pattern="[0-9]*"
          inputmode="numeric"
          v-model="cardNumber"
        />
        <svg
          id="ccicon"
          class="ccicon"
          width="750"
          height="471"
          viewBox="0 0 750 471"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        ></svg>
      </div>
      <div class="field-container">
        <label for="expirationdate">Expiration (mm/yy)</label>
        <input
          required
          id="expirationdate"
          type="text"
          pattern="[0-9]*"
          inputmode="numeric"
          v-model="expireDate"
        />
      </div>
      <div class="field-container">
        <label for="securitycode">Security Code</label>
        <input
          required
          id="securitycode"
          type="text"
          pattern="[0-9]*"
          inputmode="numeric"
          v-model="ssc"
        />
      </div>
      <button-comp class="confirm"> Confirme </button-comp>
    </form>
  </div>
</template>

<script>
import { buttonComp } from "@/components/shared";
export default {
  components: {
    "button-comp": buttonComp,
  },
  data() {
    return {
      cardNumber: null,
      fullName: "",
      expireDate: "",
      ssc: 0,
    };
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

.field-container input {
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

input {
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
