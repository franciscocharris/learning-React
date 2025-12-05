import { useState } from 'react'

export const useCounter = (initValue: number = 10) => {
  const [counter, setCounter] = useState(initValue);
  const handleAdd = () => setCounter(counter + 1);
  const handleSubtract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(5);
  return {
    counter,
    handleAdd,
    handleSubtract,
    handleReset,
  }
}
