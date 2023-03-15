import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter component', () => {
    test('Must be match with snapshot', () => {
        const wrapper = shallowMount(Counter)

        expect(wrapper.html()).toMatchSnapshot()
    })
    test('h2 must has the default value "Counter"', () => {
        const wrapper = shallowMount(Counter)
        const h2 = wrapper.find('h2')
        expect(h2.exists()).toBeTruthy()
        expect(h2.text()).toBe('Counter')
    })
})