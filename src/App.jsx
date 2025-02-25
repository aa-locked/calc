import react from 'react'
import Wrapper from './component/Wrapper'
import Screen from './component/Screen'
import Button from './component/Button'
import ButtonBox from './component/ButtonBox'

const btnValues=[
  ["C","+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="]
]
function App() {

  return (
    <>
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {btnValues.map((btn,i)=>(
            <Button value={btn}/>
          ))}
          
        </ButtonBox>
      </Wrapper>
    </>
  )
}

export default App
