import React from "react";
import Navbar from "../Navbar";
import "./TempConvert.css";

class Convert extends React.Component{
    constructor(props) {
        super(props)
        this.state = {scale:'c',temp:0}
    }
    handleCelsius = (e) => {
        this.setState({scale:'c', temp:e.target.value})
    }

    handleFahrenheit = (e) => {
        this.setState({scale:'f',temp:e.target.value})
    }
    render(){
        const temp = this.state.temp
        const scale = this.state.scale
        const celsius = scale === 'f' ? (temp -32)*5/9 : temp;
        const fahrenheit = scale === 'c' ? (temp *9/5) + 32 : temp;
        return(
            <>
            <div className="convert">
                <h2>Celsius</h2>
                <input value={celsius} onChange={this.handleCelsius}/>
                <h2>Fahrenheit</h2>
                <input value={fahrenheit} onChange={this.handleFahrenheit}/>
            </div>
            <div className="converted">
                <p>Celsius: {celsius}°C</p>
                <p>Fehrenheit: {fahrenheit}°F</p>
            </div>
            </>
        )
    }
}

export default Convert;