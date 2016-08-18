import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import Home from './Home';
// import CreateDemoRoute from './CreateDemo';

// export const createRoutes = (store) => ({
export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    // CreateDemoRoute(store),
  ],
});

export default createRoutes;
