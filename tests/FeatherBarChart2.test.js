import Vue from 'vue/dist/vue'

import FeatherBarChart2 from '../icons/FeatherBarChart2.vue'

describe('FeatherBarChart2 component', () => {
  const vm = new Vue(FeatherBarChart2).$mount()

  it('is an SVG element', () => {
    expect(vm.$el.tagName).toBe('svg')
  })

  it('matches snapshot', () => {
    expect(vm.$el).toMatchSnapshot()
  })

  it('defaults to stroke width of 2', () => {
    expect(vm.$el.getAttribute('stroke-width')).toBe('2')
  })

  it('has no children with stroke width or colour properties', () => {
    for (const child of vm.$el.children) {
      expect(child.getAttribute('stroke-width')).toBeNull()
      expect(child.getAttribute('stroke')).toBeNull()
    }
  })
})
