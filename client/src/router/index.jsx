import Index from '../layouts/Index/index'
import Resume from '../layouts/Resume/resume'
const indexRoutes = [
  { path: "/cv",component: Resume },
  { path: "/",component: Index },
];

export default indexRoutes;
