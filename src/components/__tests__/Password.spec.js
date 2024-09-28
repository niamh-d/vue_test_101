import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Password from '../Password.vue'

it('renders an error if length is too short', () => {
  const wrapper = mount(Password, {
    props: {
      minLength: 10
    },
    data() {
      return {
        password: 'short'
      }
    }
  })

  expect(wrapper.html()).toContain('Password must be at least 10 characters')
})
