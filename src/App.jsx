import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="">
      
      {number < 3 ? <Count number={number} /> : null}
      <Button setNumber={setNumber} />
    </div>
  );
}

export default App;
