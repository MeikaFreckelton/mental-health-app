import { BrowserRouter, Route, Switch } from 'react-router-dom'

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

          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/dash" component={Dashboard} />

          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
