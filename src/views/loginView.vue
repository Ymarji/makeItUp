<template>
  <div class="login-container">
    <h2 class="title">Log in to Your Account</h2>
    <form class="login-form" @submit.stop.prevent="login">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <span
        >You dont have an account?
        <router-link :to="{ name: 'signin' }">
          Create an account</router-link
        ></span
      >
      <button type="submit" @click.stop="">Log In</button>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(() => {
          this.$store.dispatch("user/login", {
            name: this.email,
            password: this.password,
          });
          this.$router.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 1.2rem;
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
</style>
