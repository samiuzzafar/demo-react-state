//import React from 'react';
import React, {useState} from 'react';
import './Room.css';

/* 
The Assignment:
---------------

• Add 2 more buttons: “ON” and “OFF”. Turn the light either ON or OFF depending on which
button is clicked by wiring up the onClick handlers to set the state.
• Add another piece of state: the room temperature. (Hint: you can call useState more than once!)
Initialize it to 72 (or 22 for you Celsius types). Display the current temperature under the light
status.
• Add 2 more buttons: “+” and “-”. Then add onClick handlers that will increase or decrease the
temperature by 1 degree when clicked,
*/



function Room() {

  let [isLit, setLit] = useState(false);
  let [currentTemp, setTemp] = useState(22);

  return (
    <div className={`room ${isLit? "lit": "dark"}`}> 
            
        <h1>Welcome to this Room</h1>
        Here you can:
        <ol>
            <li>Turn the lights on / off</li>
            <li>View the temperature</li>
            <li>Increase/decrease temprature</li>
        </ol>
        <br/><br/>
        Light is currently <b>{isLit? "ON":"OFF"}</b>
        <br/><br/>
        <button onClick={()=>setLit(!isLit)}>Toggle Light</button>
        <br/><br/>
        <br/><br/>
                
        Temperature is currently <b>{currentTemp} C</b>
        <br/><br/>
        <button onClick={()=> setTemp(++currentTemp)}><b>+</b></button> 
        <button onClick={()=> setTemp(--currentTemp)}><b>-</b></button>
        <br/><br/>
    </div> 

  );
}

export default Room;
