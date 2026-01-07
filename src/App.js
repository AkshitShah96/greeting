/*import Greeting from './Greeting';

function App()
{
  return (
    <>
    <Greeting name="Akshit"/>
</>
  )
}

export default App;*/



/*

import StudentCard from "./Student";

function App() {
  return(
    <StudentCard name={"Akshit"} roll={20} marks={85} />  
  )
}

export default App;   
*/


/*
import ProductCard from "./ProductCard";

function App()
{
  return(
    <>
          <ProductCard name="ABCD" price={1000} inStock={true} />
          <ProductCard name="NCND" price={1060} inStock={false}/>

          
</>
  )
}

export default App;

*/




/*
  
import Task from "./Task";
function App()
{
  return(
    <>
<Task name="react practical" isCompleted={false} />
      <Task name="theory exams" isCompleted={true} />
</>
        )
}

export default App;
*/






/*
import Profile from "./Profile";

function App() {
  return (
    <>
      <Profile name="Swayam" />
      <Profile name="Vraj" age={21} city="Delhi" />
    </>
  )
}

export default App;
*/








/*

import CustomButton from "./CustomButton"

function App() {
  return (
    <>
      <CustomButton buttonName="Button 1"  handleButtonClick={() => alert("Hello from Button 1")}
      />

      <CustomButton buttonName="Button 2"  handleButtonClick={() => alert("Hello from Button 2")}
      />
    </>
  )
}

export default App


*/








/*
import { useState } from "react"
import LikeButton from "./LikeButton"

function App() {
  const [likes, setLikesCount] = useState(0)

  return (
    <>
      <LikeButton  likes={likes} setLikesCount={setLikesCount}
      />
    </>
  )
}

export default App
*/




/*
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function handleIncrement() {
    setCount(count + step)
  }

  function handleDecrement() {
    if (count - step < 0) {
      alert("Cannot go below 0!")
    } else {
      setCount(count - step)
    }
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <>
      <h2>Reset Counter with Step</h2>

      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={handleIncrement}>+</button>

      <span style={{ margin: "0 10px" }}>
        Count: {count}
      </span>

      <button onClick={handleDecrement}>-</button>

      <br /><br />

      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
*/








import { useState } from "react"
import ControlPut from "./ControlPut"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit() {
    alert("Name = " + name + " and Email = " + email)
  }

  return (
    <>
      <h2>Controlled Form Input</h2>

      <ControlPut
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default App





