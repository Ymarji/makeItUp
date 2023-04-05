<template>
  <button :class="['button', { reverse: reverse }]" @click="callback($event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    callback: function (e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style>
.button {
  padding: 0.5rem 1.5rem;
  border: 2px black solid;
  color: black;
  background-color: transparent;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}

.reverse {
  /* background-color: black; */
  color: white;
  border: 2px white solid;
}
</style>
5
