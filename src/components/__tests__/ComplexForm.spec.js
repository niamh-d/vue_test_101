import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ComplexForm from '../ComplexForm.vue'

it('submits a form with correct payload', async () => {
  const wrapper = mount(ComplexForm)

  const email = 'test@example.com'
  const description = 'Some test description'
  const city = 'new-york'

  await wrapper.find('input[type="email"]').setValue(email)
  await wrapper.find('textarea').setValue(description)
  await wrapper.find('select').setValue(city)
  await wrapper.find('input[type=checkbox]').setValue()
  await wrapper.find('input[type=radio][value=monthly]').setValue()

  await wrapper.find('form').trigger('submit.prevent')

  expect(wrapper.emitted('submit')[0][0]).toStrictEqual({
    email,
    description,
    city,
    subscribe: true,
    interval: 'monthly'
  })
})
