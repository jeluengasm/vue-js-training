import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter component', () => {
    let wrapper, value

    // Clean the wrapper/value after each test
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

    test('Must change the counter value when the buttons are clicked', async () => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        expect(value.text()).toBe('101')
    })

    test('Must be declared a default value', () => {
        const { start } = Counter.props
        expect(start).toBeTruthy()
        expect(start.type).toBe(Number)
        expect(start.default).toBe(100)
        expect(start.required).toBeTruthy()
        expect(start.default).toBe(Number(value.text()))
    })

    test('Must be let declared the props', () => {
        const bookTitle = 'My Counter'
        wrapper = shallowMount(Counter, {
            props: {
                bookTitle,
                start: '200'
            }
        })
        expect(wrapper.props('bookTitle')).toBe(bookTitle)
        expect(wrapper.find('h2').text()).toBe(bookTitle)
    })
})