import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter component', () => {
    let wrapper, value

    // Clean the wrapper after each test
    beforeEach(() => {
        wrapper = shallowMount(Counter)
        value = wrapper.find('[data-testid="counter"]')
    })

    test('Must be match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('h2 must has the default value "Counter"', () => {
        const h2 = wrapper.find('h2')
        expect(h2.exists()).toBeTruthy()
        expect(h2.text()).toBe('Counter')
    })

    test('The counter starts at 100', () => {
        expect(value.exists()).toBeTruthy()
        expect(value.text()).toBe('100')
    })

    test('Must increase the counter in 1', async () => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        expect(value.text()).toBe('101')
    })
})