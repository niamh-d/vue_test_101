<template>
  <button @click="handleClick">Increment</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('increment')
    }
  }
}
</script>
