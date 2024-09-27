import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar2 from '../Navbar2.vue'

it('does not show the user dropdown', () => {
  const wrapper = mount(Navbar2)
  expect(wrapper.find('#user-dropdown').isVisible()).toBe(false)
})

it('shows the user dropdown', () => {
  const wrapper = mount(Navbar2, {
    data() {
      return {
        shouldShowDropdown: true
      }
    }
  })
  expect(wrapper.find('#user-dropdown').isVisible()).toBe(true)
})
