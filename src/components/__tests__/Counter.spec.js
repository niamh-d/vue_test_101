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
  expect(incrementEvent[0][0].count).toEqual(1)
  expect(incrementEvent[1][0].count).toEqual(2)
})

it('emits an event with object with count and isEven when clicked', () => {
  const wrapper = mount(Counter)

  wrapper.find('button').trigger('click')
  wrapper.find('button').trigger('click')

  const incrementEvent = wrapper.emitted('increment')
  expect(incrementEvent).toHaveLength(2)
  expect(incrementEvent[0]).toEqual([
    {
      count: 1,
      isEven: false
    }
  ])
  expect(incrementEvent[1]).toEqual([
    {
      count: 2,
      isEven: true
    }
  ])
})
