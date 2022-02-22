import React, {useState} from 'react'
export const useCounter = (initialValue?: number) => {

    const [counter, setCounter] = useState<number>(initialValue ? initialValue : 0)

    function inc(number: number) {
        setCounter(prevState => prevState + number)
    }
    function dec(number: number) {
        setCounter(prevState => prevState - number)
    }

    function setCounterValue(value : number) {
        setCounter(value)
    }

    function resetCounter() {
        setCounter(0)
    }

    return {
        counter,
        inc,
        dec,
        setCounterValue,
        resetCounter
    }
 }