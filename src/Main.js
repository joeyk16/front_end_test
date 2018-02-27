import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import New from './New';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/new' component={New}/>
    </Switch>
  </main>
)

export default Main
