import react from 'react'
import Wrapper from './component/Wrapper'
import Screen from './component/Screen'
import Button from './component/Button'
import ButtonBox from './component/ButtonBox'
import CalcProvider from './context/calcContext'

const btnValues=[
  ["C","+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="]
]
function App() {

  return (
    <CalcProvider>
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {btnValues.flat().map((btn,i)=> (
            <Button value={btn} key={i}/>
          ))}
          
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  )
}

export default App
