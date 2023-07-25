import { useState } from 'react'
import TempDisplay from './TempDisplay'
import TempInput from './TempInput'

// Create a temperature converter app that allows users to convert temperatures between Celsius and Fahrenheit. 
// Lift the state up to the parent component and pass the temperature value and the conversion functions 
// as props to the child components responsible for handling the input and displaying the result.
function App() {
  const [temp, setTemp] = useState(0)

  return (
    <div>
      <h1>Temperature Converter</h1>
      <div>
        <h3>Celcius Converter: </h3>
        <TempInput />
        <TempDisplay />
      </div>
      <div>
        <h3>Fahrenheit Converter: </h3>
        <TempInput />
        <TempDisplay />
      </div>
    </div>
  )
}

export default App
