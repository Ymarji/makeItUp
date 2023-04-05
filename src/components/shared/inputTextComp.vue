<template>
  <input
    class="basicInput"
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('update', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  model: {
    prop: "value",
    event: "update",
  },
};
</script>

<style>
.basicInput {
  padding: 0.25rem;
}
</style>
