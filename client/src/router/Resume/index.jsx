import Loadable from 'react-loadable';
import React from 'react'
const Resume = Loadable({
  loader: () => import('@/views/Edit/index'),
  loading: () => <div>Loading Index...</div>,
})
const resumeRoutes = [
  {
    path: '/cv/edit',
    component: Resume,
  },
  { redirect: true, path: "/cv", to: "/cv/edit" }
]
export default resumeRoutes;