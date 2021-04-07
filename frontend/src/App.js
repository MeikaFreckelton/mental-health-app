import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import Habits from './components/habits/Habits'
import NewHabit from './components/habits/NewHabit'

import Moods from './components/moods/Moods'
import NewMoodEntry from './components/moods/NewMoodEntry'

import Workouts from './components/workouts/NewWorkouts'


import './styles/App.css'
import './styles/Tablet.css'
import './styles/Desktop.css'




const App = () =>  {

  const [formData, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  

  const handleChange = e => {
      const { name, value } = e.target
      setForm({
          ...formData, 
          [name]: value
      })
  }

  const handleSubmit = e => {
      e.preventDefault()
  }


  return (
    <div className="App">
      <BrowserRouter>

      <Nav />

        <Switch>
          <Route exact path="/workouts" component={Workouts} />

          <Route exact path="/habits/new" component={NewHabit} />
          <Route exact path="/habits" component={Habits} />

          <Route exact path="/moods/new" component={NewMoodEntry} />
          <Route exact path="/moods" component={Moods} />

          <Route exact path="/login">
            <Login handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />
          </Route> 
          <Route exact path="/register">
            <Register handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />
          </Route> 


          <Route exact path="/dash">
            <Dashboard />
          </Route>

          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
