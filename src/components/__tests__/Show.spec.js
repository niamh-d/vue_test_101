import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Show from '../Show.vue'

it('renders a greeting when show is true', async () => {
  const wrapper = mount(Show)

  expect(wrapper.html()).toContain('Hello')

  await wrapper.setProps({ show: false })

  expect(wrapper.html()).not.toContain('Hello')
})
