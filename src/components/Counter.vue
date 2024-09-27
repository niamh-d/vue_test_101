<template>
  <button @click="handleClick">Increment</button>
  <div>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count++
      this.$$emit('increment', this.count)
    }
  }
}
</script>
