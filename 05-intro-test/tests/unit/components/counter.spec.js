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

    test('The counter starts at 100', () => {
        const wrapper = shallowMount(Counter)
        const value = wrapper.find('[data-testid="counter"]')
        
        expect(value.exists()).toBeTruthy()
        expect(value.text()).toBe('100')
    })

    test('Must increase the counter in 1', async () => {
        const wrapper = shallowMount(Counter)
        
        const increaseBtn = wrapper.findAll('button')[0]
        await increaseBtn.trigger('click')
        const value = wrapper.find('[data-testid="counter"]')

        expect(value.text()).toBe('101')

        const decreaseBtn = wrapper.findAll('button')[1]
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        expect(value.text()).toBe('99')


        
    })
})