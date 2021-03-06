import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Dashboard from './containers/Dashboard'
import Recipes from './containers/Recipes'
import ShoppingList from './containers/ShoppingList'

export default function App() {
  return (
    <div className='app__w'>
      <Router>
        <Navigation />
        <div className='app__body'>
          <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route path='/recipes' component={Recipes} exact />
            <Route path='/shoppingList' component={ShoppingList} exact />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
