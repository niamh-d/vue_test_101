import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Form from '../Form.vue'

it('sets the value of email', async () => {
  const wrapper = mount(Form)
  const emailInput = wrapper.find('input')

  await emailInput.setValue('test@example.com')

  expect(emailInput.element.value).toBe('test@example.com')
})

it('triggers', async () => {
  const wrapper = mount(Form)

  await wrapper.find('button').trigger('click')

  expect(wrapper.emitted()).toHaveProperty('submit')
})

it('emits the input to its parent', async () => {
  const wrapper = mount(Form)

  await wrapper.find('input').setValue('test@example.com')
  await wrapper.find('button').trigger('click')

  expect(wrapper.emitted('submit')[0][0]).toBe('test@example.com')
})
