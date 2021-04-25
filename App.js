import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises';
import ExercisesNew from '../pages/ExercisesNew';
import Hooks from './Hooks2'

console.log("rama3")
const App = () => ( 
    <Router>
        <Switch>
            <Route exact path='/exercise' component={Exercises} />
            <Route exact path='/exercise/new' component={ExercisesNew} />
            <Route exact path='/hooks' component={Hooks} />
        </Switch>
    </Router>

)

export default App