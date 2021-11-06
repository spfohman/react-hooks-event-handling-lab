// Code EyesOnMe Component Here
import React from 'react';
function EyesOnMe(){
    function handleBlur(){
        console.log("Hey! Eyes on me!")
    }
    function handleFocus(){
        console.log("Good!")
    }
    return(
        <div>
        <button onFocus={handleFocus}onBlur={handleBlur} >Eyes On Me</button>
        </div>
   
    )
}
export default EyesOnMe;