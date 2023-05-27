import { createRouter, createWebHistory } from "vue-router";

const WelcomePage = () => import("../pages/welcome/WelcomePage.vue");
const HomePage = () => import("../pages/home/HomePage.vue");
const LoginPage = () => import("../pages/auth/login/LoginPage.vue");
const SignupPage = () => import("../pages/auth/signup/SignupPage.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: WelcomePage },
    { path: "/home", component: HomePage },
    { path: "/auth/login", component: LoginPage },
    { path: "/auth/signup", component: SignupPage },
  ],
});

export default router;
