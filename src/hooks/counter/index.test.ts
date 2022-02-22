import '@testing-library/jest-dom';
import { renderHook, act  } from "@testing-library/react-hooks";
import {useCounter} from "./index";

describe("useCounter" , () => {

    it("check initialValue" , () => {
        const {result} = renderHook(() => useCounter(100))

        expect(result.current.counter).toBe(100)
    })
    it("check no initialValue" , () => {
        const {result} = renderHook(useCounter)

        expect(result.current.counter).toBe(0)
    })
    it("inc count by 1" , () => {
        const {result} = renderHook(useCounter)

        let old_currentValue = result.current.counter

        act(() =>  {
            result.current.inc(1)
        })

        expect(result.current.counter - old_currentValue).toBe(1)
    })

    it("inc count by 2" , () => {
        const {result} = renderHook(useCounter)

        act(() =>  {
            result.current.inc(2)
        })

        expect(result.current.counter).toBe(2)
    })

    it("setValue count by 500" , () => {

        const {result} = renderHook(useCounter)

        act(() =>  {
            result.current.setCounterValue(200)
        })

        expect(result.current.counter).toBe(200)

    })

    it("setValue count by 500 & reset" , () => {
        const {result} = renderHook(useCounter)

        act(() =>  {
            result.current.setCounterValue(500)
        })

        expect(result.current.counter).toBe(500)

        act(() =>  {
            result.current.resetCounter()
        })

        expect(result.current.counter).toBe(0)
    })


})