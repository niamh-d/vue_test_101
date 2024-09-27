<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
  <Counter @increment="increment" />
  <div>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
export default {
  name: 'TodoApp',

  components: {
    Counter
  },

  data() {
    return {
      count: 0,
      newTodo: '',
      todos: [
        {
          id: 1,
          text: 'Learn Vue.js 3',
          completed: false
        }
      ]
    }
  },

  methods: {
    increment() {
      this.count++
    },
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false
      })
    }
  }
}
</script>
