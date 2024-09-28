import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

const Layout = {
  template: `
      <div>
        <h1>Welcome!</h1>
        <main>
          <slot />
        </main>
        <footer>
          Thanks for visiting.
        </footer>
      </div>
    `
}

it('renders default slot', () => {
  const wrapper = mount(Layout, {
    slots: {
      default: 'Main Content'
    }
  })

  expect(wrapper.html()).toContain('Main Content')
  // OR
  expect(wrapper.find('main').text()).toContain('Main Content')
})

const Layout2 = {
  template: `
      <div>
        <header>
          <slot name="header" />
        </header>
  
        <main>
          <slot name="main" />
        </main>
        <footer>
          <slot name="footer" />
        </footer>
      </div>
    `
}

it('renders full page layout', () => {
  const wrapper = mount(Layout2, {
    slots: {
      header: '<div>Header</div>',
      main: '<div>Main Content</div>',
      footer: '<div>Footer</div>'
    }
  })

  expect(wrapper.html()).toContain('<div>Header</div>')
  expect(wrapper.html()).toContain('<div>Main Content</div>')
  expect(wrapper.html()).toContain('<div>Footer</div>')
})

it('renders multiple slots', () => {
  const wrapper = mount(Layout, {
    slots: {
      default: ['<div id="one">One</div>', '<div id="two">Two</div>']
    }
  })

  expect(wrapper.find('#one').exists()).toBe(true)
  expect(wrapper.find('#two').exists()).toBe(true)
})
