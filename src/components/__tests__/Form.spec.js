import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Form from '../Form.vue'

it('sets the value of email', async () => {
  const wrapper = mount(Form)
  const emailInput = wrapper.find('input')

  await emailInput.setValue('test@example.com')

  expect(emailInput.element.value).toBe('test@example.com')
})
