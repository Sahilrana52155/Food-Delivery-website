import React, { useState } from 'react'
import "./Loginpop.css"
import { assets } from '../../assets/assets'

const Loginpop = ({setShowLogin}) => {

    const [currentState,setState]=useState("Login")
  return (
    <div className='login-pop'>
<form className="login-pop-container">
<div className="login-pop-title">
    <h2>{currentState} </h2>
   <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
</div>
<div className="login-pop-inputs">
    {currentState==="Login"?<></>:<input type='Text'placeholder='Your name'required/>}
    
    <input type='Email'placeholder='Your Email'required/>
    <input type='Password'placeholder='Password'required/>


</div>
<button>{currentState==="signup"?"Create account":"Login"}</button>
<div className="login-pop-condition">
    <input type="checkbox"required />
    <p>By continuing, i agree to terms of use & privacy and policy</p>
</div>
{currentState==="Login"
?<p>Create a new account?<span onClick={()=>setState("signup")}>Click here</span></p>
:<p> Already have an account? <span onClick={()=>setState("Login")}>Login here</span></p>
}



</form>

       
      
    </div>
  )
}

export default Loginpop
