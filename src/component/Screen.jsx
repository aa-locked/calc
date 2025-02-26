import React, { useContext } from 'react'
import { CalcContext } from '../context/calcContext'
import { Textfit } from 'react-textfit';

const Screen = () => {
  const {calc} = useContext(CalcContext);
  console.log(calc)
  return (
    // <Textfit className='screen' max ={70} mode="single">{calc.num ? calc.num : calc.res}</Textfit>

    <Textfit className='screen' max ={70} mode="single">{calc.num ?     
                                                        calc.sign.length===1? String(calc.res) +String(calc.sign) + String(calc.num)   :String(calc.num) 
                                                        : calc.res && calc.sign.length===1 ? String(calc.res) +String(calc.sign) : calc.res }</Textfit>
  )
}

export default Screen
