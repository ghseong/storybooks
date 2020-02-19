<template>
  <button :class="{rounded}">
    <slot />
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    rounded: {
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  width: 150px;
  height: 50px;
  &.rounded {
    border-radius: 15px;
  }
}
</style>