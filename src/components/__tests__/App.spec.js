import { expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import TodoApp from '../../App.vue'

it('renders a todo', () => {
  const wrapper = mount(TodoApp)

  const todo = wrapper.get('[data-test="todo"]')

  expect(todo.text()).toBe('Learn Vue.js 3')
})
