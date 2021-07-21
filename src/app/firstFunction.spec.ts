import { add } from "./firstFunction"



describe('add test to add two numbers', () => {

    it('result should equal', () => {
        expect(add(10,20)).toBe(30);
    })
})