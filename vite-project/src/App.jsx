import Button from "./Button"
import React from "react"
import TempInput from "./TempInput"

// Create a temperature converter app that allows users to convert temperatures between Celsius and Fahrenheit. 
// Lift the state up to the parent component and pass the temperature value and the conversion functions 
// as props to the child components responsible for handling the input and displaying the result.
function App() {

  return (
    <div>
      <h1>Temperature Converter</h1>
      <div>
        <TempInput />
      </div>
    </div>
  )
}

export default App
