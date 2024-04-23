import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";

function App() {
  //Iteration 01
  //these useState and two functions came from Counter.jsx when lifting up
  const [count, setCount] = useState(1);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>
      {/* since we created the variables above, we will pass this info as props to counter.jsx which now expects to receive 3 props */}
      <Counter count={count} decrement={decrement} increment={increment} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>
      {/* 
      <div className="container"> */}
      {/* //the exponent component also needs to receive the number in counter as props */}
      {/* <ExponentTwo num={count} />
        <ExponentThree num={count} />
        <ExponentFour num={count} />
        <ExponentFive num={count} />
        <ExponentSix num={count} />
      </div> */}

      {/* for the bonus we would add code here after creating a new component
    Refactor the <Exponent... /> components into one reusable component named Exponent. This component should dynamically display exponents and perform calculations. The component should take the following props:

num - Number value that serves as a base on which the exponent is added and calculated
exponent - Number value representing the exponent to be applied to the base num.
     */}
      <div>
        <Exponent num={count} exponent={2} />
        <Exponent num={count} exponent={3} />
        <Exponent num={count} exponent={4} />
        <Exponent num={count} exponent={5} />
        <Exponent num={count} exponent={6} />
      </div>
    </div>
  );
}

export default App;
