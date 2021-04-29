import React from 'react'
import { Link } from 'react-router-dom'

const Moods = () => {

    return(
        <div>
            <div className="heading">
                <h1>Track your Moods</h1>
            </div>
            <div>
                <div className="pastMoodEntries">

                </div>
                <div className="newEntry">
                    <Link to="/moods/new">
                        Add a new mood entry
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Moods