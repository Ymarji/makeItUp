<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <div class="logo"><font-awesome-icon :icon="['fas', 'marker']" /></div>
        <div class="nave_link" v-show="isLogged">
          <router-link to="/" exact>Home </router-link>
          <router-link to="/products">product </router-link>
        </div>
        <div class="cart" v-show="isLogged">
          <div @click="toggleCart">
            <font-awesome-icon
              :icon="['fas', 'bag-shopping']"
              class="cart_icon"
            />
            <span class="cart_count">{{ cartLenght }}</span>
          </div>
          <cartModal v-show="cartToggle" />
        </div>
        <a href="#" class="l_button" @click.prevent="sign">
          {{ isLogged ? "Logout" : "Login" }}
        </a>
      </nav>
    </header>
    <main class="main" @click.prevent="toggleCartOff"><slot></slot></main>
    <footerComp />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import cartModal from "@/components/cartModal";
import footerComp from "@/components/footerComp";
import { getAuth, signOut } from "firebase/auth";
export default {
  data() {
    return {
      cartToggle: false,
    };
  },
  components: {
    cartModal,
    footerComp,
  },
  computed: {
    ...mapGetters("cart", ["cartLenght"]),
    ...mapState("user", ["isLogged"]),
  },
  methods: {
    toggleCart() {
      this.cartToggle = !this.cartToggle;
    },
    toggleCartOff() {
      if (this.cartToggle === true) this.cartToggle = false;
    },
    sign() {
      if (this.isLogged === true) {
        signOut(getAuth()).then(() => {
          this.$store.dispatch("user/signout");
        });
      }
      if (this.$router.currentRoute.name !== "login")
        this.$router.push("/login");
    },
  },
};
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  /* height: 100%; */
}

.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin-bottom: 0.25rem;
}

.nave_link a {
  text-decoration: none;
  color: black;
}

.nave_link a:hover {
  opacity: 0.6;
}

.logo {
  margin-right: auto;
  margin-left: 1rem;
  scale: 2.5;
  font-weight: bolder;
  color: rgb(246, 125, 146);
}
.main {
  flex-grow: 1;
}

.footer {
  justify-self: flex-end;
}

.cart {
  margin-left: auto;
  margin-right: 2rem;
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 10px;
}

.cart_icon {
  scale: 2;
  cursor: pointer;
}

.cart_count {
  aspect-ratio: 1 / 1;
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  border-radius: 99999px;
  background-color: orangered;
  padding: 0.25rem;
  font-weight: bold;
  font-size: 0.8rem;
  color: white;
  width: 1rem;
}
.cart_count {
  display: flex;
  justify-content: center;
  align-content: center;
}
.nave_link {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.l_button {
  padding: 0.25rem;
  text-decoration: none;
  border: 1px solid #000;
  border-radius: 0.25rem;
  margin-left: 0.5rem;
}
</style>
