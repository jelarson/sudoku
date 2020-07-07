import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Global, css } from '@emotion/core'

import { UserProvider } from './context/context'
import Home from './home/home'

export default function App() {
  return (
    <div className="app">
      <UserProvider>
        <Router>
          <Global
            styles={css`
              body {
                margin: 0;
                padding: 0;
              }
            `}
          />
          <div className="app-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </UserProvider>
    </div>
  )
}
