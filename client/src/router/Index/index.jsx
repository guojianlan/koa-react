import React from 'react'
import Loadable from 'react-loadable';
const Index = Loadable({
  loader: () => import('../../components/Index/index'),
  loading: () => <div>Loading Index...</div>,
})
const Login = Loadable({
  loader: () => import('../../components/Login/index'),
  loading: () => <div>Loading Index...</div>,
})
const indexRoutes = [
  {
    path: '/index',
    component: Index
  },
  {
    path: '/login',
    component: Login
  },
  { redirect: true, path: "/", to: "/index" }
]
export default indexRoutes;