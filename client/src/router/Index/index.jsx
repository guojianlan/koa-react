import React from 'react'
import Loadable from 'react-loadable';
const Index = Loadable({
  loader: () => import('@/views/Index/index'),
  loading: () => <div>Loading Index...</div>,
})
const Login = Loadable({
  loader: () => import('@/views/Login/index'),
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