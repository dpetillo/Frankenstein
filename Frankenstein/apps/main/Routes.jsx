import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import Root from './pages/Root'
import SearchPage from './pages/Search'

let Routes = (
  <Route>
    <Route path='/' component={SearchPage} />
  </Route>
)

export default Routes
