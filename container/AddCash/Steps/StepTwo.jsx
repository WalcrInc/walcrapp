import { DeleteIcon } from '@/assets'
import { Button } from '@chakra-ui/react'
import React from 'react'

const StepTwo = ({input, handleBackspace, handleNumberInput}) => {
  return (
    <>
    heyy
    <div className="number-body">

<Button
  className="button-submit"
  color={"#fff"}
  size={"lg"}
  margin={"auto"}
  background={"#1a1a1a"}
  width={"90%"}
>
  Add {input ? `${input}` : "$0.00"}
</Button>
<div className="numbers">
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0].map((number) => (
    <button
      className="number-button"
      key={number}
      onClick={() => handleNumberInput(number)}
    >
      {number}
    </button>
  ))}
  <button
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    onClick={handleBackspace}
  >
    <DeleteIcon/>
  </button>
</div>
</div>

    
    </>
    
  )
}

export  {StepTwo}