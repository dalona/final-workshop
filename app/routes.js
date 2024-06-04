import { HomeScene } from './scenes/home';
import { LoginScene } from './scenes/login/login.scene';
import { NotFoundScene } from './scenes/not-found';
import { RegisterScene } from './scenes/register';


export const routes = {
  public: [{ path: '/', scene: HomeScene },
  { path: '/not-found', scene: NotFoundScene },
  { path: '/register', scene: RegisterScene },
  { path: '/login', scene: LoginScene }
  ],
  private: [],
};
