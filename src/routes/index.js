import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Package from '../pages/Package'
import Power4 from '../pages/Power4'
import WorkFromHome from '../pages/WorkFromHome'
import Broadband from '../pages/Broadband'
import Esport from '../pages/Esport'
import Serenade from '../pages/Serenade'
import Location from '../pages/Location'
import Contact from '../pages/Contact'
import Test from '../pages/Test'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/package" component={Package} />
    <Route exact path="/power4" component={Power4} />
    <Route exact path="/workfromhome" component={WorkFromHome} />
    <Route exact path="/broadband" component={Broadband} />
    <Route exact path="/e-sport" component={Esport} />
    <Route exact path="/serenade" component={Serenade} />
    <Route exact path="/location" component={Location} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/test" component={Test} />
  </Switch>
)
