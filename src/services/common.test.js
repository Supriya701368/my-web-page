import { add } from "./common";

describe("common function", () => {
    it('add with out params', () => {
        const res = add()
        expect(res).toBe(NaN)
    })
    it('add with one params', () => {
        const res = add(10)
        expect(res).toBe(NaN)
    })
    it('add with 2 params', () => {
        const res = add(10, 20, 0)
        expect(res).toBe(30)
    })
})