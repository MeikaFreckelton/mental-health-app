import React, { useState} from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [navClass, setNav] = useState("hideLinks")

    const handleClick = e => {
        if (navClass === "hideLinks"){
            setNav("showLinks")
        } else (
            setNav("hideLinks")
        )
    }
 


    return (
        <div>
            <ul className="nav">
                <div className="navLogo">
                    <Link to="/dash">Be here now</Link>
                    <div className="icon" onClick={handleClick}>
                        <i class="far fa-heart"></i>
                    </div>
                </div>
                <div className={navClass}>
                    <Link to="/resources" className="navLink" >Resources</Link>
                    <Link to="/moods" className="navLink" >Moods</Link>
                    <Link to="/habits" className="navLink" >Habits/Hobbies</Link>
                    <Link to="/workouts" className="navLink" >Workouts</Link>
                </div>
                
                
            </ul>


        </div>
    )
}


export default Nav