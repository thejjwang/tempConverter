
const Button = ({convertToC, convertToF}) => {

    
    return (
        <div>
            <button onClick={convertToF}>Celcius to F</button>
            <button onClick={convertToC}>Fahrenheit to C</button>
        </div>
    )
}

export default Button;