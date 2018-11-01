import '@babel/polyfill'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './stores'
import ReactDOM from 'react-dom'
import './assets/public.scss'
import indexRoutes from './router/index'
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
ReactDOM.render(<Provider {...stores}>
  <Router>
    <Switch>
      {indexRoutes.map((prop, key) => {
          return <Route {...prop} key={key} />;
        })}
    </Switch>
  </Router>
</Provider>, document.getElementById('app'))