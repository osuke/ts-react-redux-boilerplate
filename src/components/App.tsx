import * as React from 'react'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../containers/Home'

const baseStyles = () => injectGlobal`
  ${reset}
`

export default class App extends React.Component<{}, {}> {
  render () {
    baseStyles()
    return (
      <Router>
        <div>
          <Route
            exact path="/"
            render={() => <Home /> }
          />
        </div>
      </Router>
    )
  }
}
