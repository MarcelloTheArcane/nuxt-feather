import Vue from 'vue/dist/vue'

import FeatherFilm from '../icons/FeatherFilm.vue'

describe('FeatherFilm component', () => {
  const vm = new Vue(FeatherFilm).$mount()

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
