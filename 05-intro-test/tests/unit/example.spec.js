


describe('ExampleComponent', () => {
    test( 'Must be greater than 10', () => {
    // 1. Init data
        let value = 5

        // 2. Action
        value = value + 5

        // 3. Expect result
        expect( value ).toBeGreaterThanOrEqual( 12 )
    })
})