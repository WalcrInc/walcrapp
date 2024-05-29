import { BackIcon } from '@/assets'
import React from 'react'
import { StatusContainer } from './Status.style'

const Ongoing = ({handlePrev}) => {
  return (
    <StatusContainer>
         <header>
            <span onClick={handlePrev}><BackIcon/></span>
            <h1>Ongoing task</h1>
            <span style={{color:"#fff"}}>.</span>
           
          </header>
          <div className='section-1'>

          </div>
          <div className='section-2'>
            
          </div>
    </StatusContainer>
  )
}

export  {Ongoing}