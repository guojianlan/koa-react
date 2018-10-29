import '@babel/polyfill'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './stores'
import ReactDOM from 'react-dom'
import './assets/public.scss'
import App from './views'
import indexRoutes from './router/index'
const Pros = () => <div>111111</div>
ReactDOM.render(<Provider {...stores}>
  <Router>
    <Switch>
      {indexRoutes.map((prop, key) => {
          return <Route  path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
  </Router>
</Provider>, document.getElementById('app'))