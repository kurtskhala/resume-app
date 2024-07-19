import appRoutes from "../constants/routes";
import Home from "../pages/home/Home";
import Resume from "../pages/resume/Resume";

const routes = [
  {
    path: appRoutes.home,
    Component: Home,
  },
  {
    path: appRoutes.resume,
    Component: Resume,
  },
];

export default routes;
