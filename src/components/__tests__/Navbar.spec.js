import { beforeEach, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.js'

it('renders a profile link', () => {
  const wrapper = mount(Navbar)
  const profileLink = wrapper.get('#profile')

  expect(profileLink.text()).toBe('My Profile')
})

it('does not render an admin link', () => {
  const wrapper = mount(Navbar)
  expect(wrapper.find('#admin').exists()).toBe(false)
})

it('renders an admin link', () => {
  const wrapper = mount(Navbar, {
    data() {
      return {
        admin: true
      }
    }
  })

  expect(wrapper.get('#admin').text()).toEqual('Admin')
})
