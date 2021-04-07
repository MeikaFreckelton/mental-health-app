import React from 'react'


const Login = ({ formData, handleChange, handleSubmit }) => {
    const { name, email, password } = formData


    return (
        <div>
            <div className="authWrapper">
                <div className="authHeading">
                    <h1 className="underline">Log In</h1>
                </div>
                <div className="authForm">
                    <div className="formFields">
                        <label>Full Name</label>
                        <input name="name" value={name} onChange={handleChange} />

                    </div>
                    <div className="formFields">
                        <label>Email</label>
                        <input name="email" value={email} onChange={handleChange} />
                        
                    </div>
                    <div className="formFields">
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={handleChange} />
                        
                    </div>
                    <input type="submit" className="formSubmit" onClick={handleSubmit} />
                </div>
                
            </div>

        </div>
    )
}


export default Login