import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

it('emits an event when clicked', () => {
  const wrapper = mount(Counter)

  wrapper.find('button').trigger('click')

  expect(wrapper.emitted()).toHaveProperty('increment')
})

it('emits an event with count when clicked', () => {
  const wrapper = mount(Counter)

  wrapper.find('button').trigger('click')
  wrapper.find('button').trigger('click')

  const incrementEvent = wrapper.emitted('increment')
  expect(incrementEvent).toHaveLength(2)
  expect(incrementEvent[0]).toEqual([1])
  expect(incrementEvent[1]).toEqual([2])
})
