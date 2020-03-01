import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Dashboard from './containers/Dashboard'
import Receipts from './containers/Receipts'
import ShopingList from './containers/ShopingList'

export default function App() {
  return (
    <div className='app__w'>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' component={Dashboard} exact />
          <Route path='/receipts' component={Receipts} exact />
          <Route path='/shopinglist' component={ShopingList} exact />
        </Switch>
      </Router>
    </div>
  )
}
