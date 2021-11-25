import React from 'react'


const Dashboard = () => {




    return (
        <div className="dashWrapper">
            <div className="heading">
                <h1>Welcome user :)</h1>
            </div>
            <div className="dashboard">
                <div id="streaks">
                    <p className="dashTitle">Streaks</p>
                    <div id="streakSection">

                    </div>

                </div>
                <div id="yourDay">
                    <div className="yourDayTitle">
                        <p className="dashTitle">Your Day</p>
                        <p className="editTodayLink">Add/Edit</p>

                    </div>
                    <p className="editWeekLink">Edit your weekly habit tracking</p>
                    <div className="yourDaySection">

                    </div>
                    
                </div>
                <div id="moods">
                    <p className="dashTitle">What's on your mind?</p>
                    <div className="moodsSection">
                        <p className="affirm"></p>
                        <p className="grateful"></p>
                        <div classname="feelings">
                            <p>Today I'm Feeling...</p>
                            <div></div>
                            <p>Because of...</p>
                            <div></div>
                        </div>
                        <div className="journalPreview">
                            <div className="journalIcon">

                            </div>
                            <p className="journalTitle"></p>
                            <p className="journalTime"></p>
                        </div>
                    </div>

                </div>
                
            </div>


        </div>
    )
}


export default Dashboard