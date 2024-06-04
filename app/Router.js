import { routes } from './routes';
import { NotFoundScene } from './scenes/not-found';





export function Router() {
  const path = window.location.pathname;

  const publicRoute = routes.public.find((route) => route.path === path);

  if (publicRoute) {
    publicRoute.scene();
    return
  }

  navigateTo('/not-found')

}
// const privateRoute = routes.private.find((route) => route.path === path);

// if(privateRoute){
//   privateRoute.scene();
// }

export function navigateTo(path) {
  window.history.pushState({}, "", window.location.origin + path);
  Router();

}