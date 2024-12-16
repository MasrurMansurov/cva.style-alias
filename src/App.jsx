import './App.css'
import { Button } from '@/components/button/button'
import img from "@/assets/react.svg"

function App() {
  return (
    <>
     <Button color={'primary'} size={"large"}>Hello</Button>
     <img src={img} alt="Error" />
    </>
  )
}

export default App
