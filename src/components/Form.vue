<template>
  <input type="email" v-model="email" />
  <button @click="submitHandler">Submit</button>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    submitHandler() {
      this.$emit('submit', this.email)
    }
  }
}
</script>
