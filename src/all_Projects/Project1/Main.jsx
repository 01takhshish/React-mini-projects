import React, { useState } from 'react'

const Main = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');
    
    // LOGIC
    let calcBmi = (e) =>{
    e.preventDefault()
    if(weight ===0 || height === 0){
        alert("please enter correct weight and height")
    }
    else{
        let bmi=(weight/(height*height)*703)
        setBmi(bmi.toFixed(1))
        if(bmi<25){
            setMessage('you are underweight')
        }else if(bmi>=25 && bmi<30){
            setMessage('u r healghty')
        }else{
            setMessage('u r overweight')
        }
    }
    }

    let reload = () =>{
        window.location.reload()
    }
    return (
        <div>
            <div className='container'>
                <h1>BMI Calculate</h1>
                <form onSubmit={calcBmi}>
                    <div>
                        <label>Weight(kg)</label>
                        <input type='text' placeholder='Enter your weight in kg.' value={weight}  onChange={(e) => setWeight(e.target.value)}/>

                        <label>Height()</label>
                        <input type='text' placeholder='Enter your height in kg.' value={height} onChange={(e) => setHeight(e.target.value)}/>
                    </div>
                    <div>
                        <button className='btn' type='submit'>Submit</button>
                        < button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
                    </div>
                    <div className='center'>
                        <h3>Your BMI is: {bmi}</h3>
                        <p>{message}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Main
