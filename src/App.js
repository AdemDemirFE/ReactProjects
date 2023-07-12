import { useState } from "react";
import Adem from "./components/Adem.jsx";
import Deneme from "./components/Deneme.jsx";

function App() {
  const [count, setCount] = useState(0)

  const deneme = "adem"
  const denemeProps = "Deneme props"
  const arr = [
    {name: 'array1', id:0},
    {name: 'array2', id:1},
    {name: 'array3', id:2},
  ]

  console.log("count ", count)

  const clickFunction = () => {
    console.log("Tıklandı")
    setCount( count + 1)
  }
  return (
    <div className="App">
      <Adem/>
      <Deneme adem={denemeProps}/>
      <button onClick={clickFunction}>Tıkla</button>
      {
        arr.map((ar) => (
          <div key={ar.id}> {ar.name} </div>
        ))
      }
      {count}
    </div>
  );
}

export default App;
