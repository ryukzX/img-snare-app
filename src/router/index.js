import { createRouter, createWebHistory } from 'vue-router';

import WelcomePage from '../pages/welcome/WelcomePage.vue';
import HomePage from '../pages/home/HomePage.vue';
import LoginPage from '../pages/auth/login/LoginPage.vue';
import SignupPage from '../pages/auth/signup/SignupPage.vue';

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/home', component: HomePage },
  { path: '/auth/login', component: LoginPage },
  { path: '/auth/signup', component: SignupPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
