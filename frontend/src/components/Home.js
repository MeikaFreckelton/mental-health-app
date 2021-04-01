import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


    return (
        <div className="home">
            <div className="heading">
                <h1 className="underline">Welcome :)</h1>
            </div>
            <div className="sub">
                Log in or create an account to get started
            </div>
            <div className="homeNav">
                <Link to="/login" className="authLinks" >Log in</Link>
                <Link to="/register" className="authLinks" >Create an account</Link>
                
            </div>
        </div>
    )
}


export default Home