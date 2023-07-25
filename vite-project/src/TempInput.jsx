import React from "react";
import { useState } from "react";
import Button from "./Button";
import TempDisplay from "./TempDisplay";

const TempInput = () => {
    const [inputValue, setInputValue] = useState(0);
    const [temp, setTemp] = useState(0);

    const handleChange = (e) => {
        setInputValue(Number(e.target.value));
    }

    const convertToC = (inputValue) => {
        const newCValue = (inputValue - 32) * (5/9);
        setTemp(newCValue);
    }
    const convertToF = (inputValue) => {
        const newFValue = (inputValue * (9/5) + 32);
        setTemp();
    } 

    return (
        <div>
            <Button convertToC={convertToC} convertToF={convertToF}/>
            <input type="number" placeholder="enter a temperature" value={inputValue} onChange={handleChange}/>
            <TempDisplay temp={temp}/>
        </div>
    )
}

export default TempInput;