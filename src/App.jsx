import React, {useState} from 'react';

const App = () => {
    const [bmi, setBmi] = useState();
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [message, setMessage] = useState("");

    let category = "";

    const calculateBmi = (event) => {
        event.preventDefault();
        if(weight===0 || height===0)
        {
            alert("Please enter a valid height and weight!!");
        }
        else 
        {
            const calculatedBmi = (weight/Math.pow(height/100, 2)).toFixed(1);
            setBmi(calculatedBmi);
            if(calculatedBmi < 18.5)
            {
                category = "underweight";
            }
            else if(calculatedBmi>=18.5 && calculatedBmi<25)
            {
                category = "normal";
            }
            else if(calculatedBmi>=25 && calculatedBmi<30)
            {
                category = "overweight";
            }
            else if(calculatedBmi>=30)
            {
                category = "obese";
            }   
            setMessage(`You are ${category}`);
        }
        
    }

    return(
        <>
            <div className="container">
                <div className="inner">
                    <h2>BMI Calculator</h2>
                    <form>
                        <label for="weight">Weight(in kg)</label><br/>
                        <input 
                        type="number" 
                        name="weight" 
                        placeholder="Enter weight value" 
                        onChange={(e)=>setWeight(e.target.value)}
                        >
                        </input>
                        <br/>
                        <label for="height">Height(in cm)</label><br/>
                        <input 
                        type="number" 
                        name="height" 
                        placeholder="Enter height value"
                        onChange={(e)=>setHeight(e.target.value)}
                        ></input>
                        <br/>
                        <button type="submit" className='submitbtn' onClick={calculateBmi}>Submit</button>
                        <button>Reload</button>
                        <p className='result'>Your BMI is: {bmi}
                        {bmi ? " kg/m\u00B3" : ""}</p>
                        <p className='category'>{message}</p>
                    </form>
                </div>
            </div>
        </>
    )
};

export default App;