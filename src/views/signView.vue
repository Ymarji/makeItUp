<template>
  <div class="login-container">
    <h2 class="title">Sign in to a new Account</h2>
    <form class="login-form" @submit.prevent="signIn">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required />

      <label for="password">Password: 6 or more</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="password"
        required
      />
      <label for="repassword">RePassword: </label>
      <input
        type="password"
        id="repassword"
        v-model="v_password"
        placeholder="Repassword ..."
        required
      />
      <button type="submit" :disabled="b_disabled">create an account</button>
    </form>
    <ul class="s_error_msg">
      <li v-for="(error, index) in error_msg" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      v_password: "",
      error_msg: [],
    };
  },
  methods: {
    signIn() {
      if (this.password === this.v_password && this.password.length >= 6) {
        createUserWithEmailAndPassword(getAuth(), this.email, this.password)
          .then(() => {
            this.$router.push("/login");
          })
          .catch((err) => {
            this.error_msg = [];
            if (err.code === "auth/email-already-in-use") {
              this.error_msg.push("email already in use");
            }
            console.log({ ...err });
          });
      }
    },
  },
  computed: {
    b_disabled() {
      return this.password != this.v_password || this.password.length < 6;
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}

.title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #0069d9;
}

button:disabled {
  cursor: not-allowed;
  background-color: gray;
}

.s_error_msg {
  padding-top: 0.5rem;
  color: red;
}
</style>
