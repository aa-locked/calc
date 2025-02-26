import React, { useContext } from 'react'
import {CalcContext} from "../context/CalcContext"
const getStyleName =(prop)=>{

 

  const className ={
    "=": "equals",
    "x": "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  }
  return className[prop]
}

const Button = ({value}) => {

  const {calc,setCalc} = useContext(CalcContext);
 
  //User Button Click Event Handlig
  const commaClick =()=>{
    setCalc({
      ...calc,
      num:!calc.num.toString().includes('.')?calc.num + value : calc.num
    });
  }
  //If C Pressed
  const resetClick =()=>{
    setCalc({sign:"",num:0,res:0});
  }
  //User Click Number

  const handleClickButton = ()=>{
    const numberString = value.toString();

    let numberValue;
    if(numberString==="0" && calc.num===0){
      numberValue="0";
    }
    else{
      numberValue = Number(calc.num+ numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
      sign: calc.sign ? calc.sign :''
    });

  }

  const signClick =()=>{
    setCalc({
      sign:value,
      res : !calc.res && calc.num ?calc.num  : calc.res,
      num:0
    })
  }
  const equalClick =()=>{

    if(calc.res && calc.num){
      const math = (a,b,sign )=>{
        const result ={
          "+" :(a,b)=> a+b,
          "-" :(a,b)=> a-b,
          "x" :(a,b)=> a*b,
          "/" :(a,b)=> a/b,
        }
        return result[sign](a,b)
      }
      setCalc({
        res : math(calc.res,calc.num,calc.sign),
        sign :'',
        num : 0
      });
    }   
    
  }

  const perClick =()=>{
    setCalc({
      res : (calc.res/100),
      sign :'',
      num : (calc.num/100)
    });
  }
  const invertClick =()=>{
    setCalc({
      res : calc.res ? calc.res * -1 : 0,
      sign :'',
      num : calc.num ? calc.num * -1 : 0
    });
  }
  const handleBtnClick =()=>{
    const results ={
      '.': commaClick,
      'C': resetClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '/': signClick,
      '=': equalClick,
      '%': perClick,
      '+-': invertClick
    }
    if(results[value]){
      return results[value]()
    }
    else {
      handleClickButton();
    }
    
  }
  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}> {value}</button>
  )
}

export default Button
