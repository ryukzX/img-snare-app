import { createRouter, createWebHistory } from "vue-router";

const WelcomePage = () => import("@pages/welcome/WelcomePage.vue");
const HomePage = () => import("@pages/home/HomePage.vue");
const AboutPage = () => import("@pages/about/AboutPage.vue");
const ToSPage = () => import("@pages/about/ToSPage.vue");
const PrivacyPage = () => import("@pages/about/PrivacyPage.vue");
const LoginPage = () => import("@pages/auth/login/LoginPage.vue");
const SignupPage = () => import("@pages/auth/signup/SignupPage.vue");
const ProfilePage = () => import("@pages/user/profile/ProfilePage.vue");
const UploadPage = () => import("@pages/user/profile/UploadPage.vue");
const ErrorPage = () => import("@pages/error404/ErrorPage.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: WelcomePage },
    { path: "/home", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/tos", component: ToSPage },
    { path: "/privacy", component: PrivacyPage },
    { path: "/auth/login", component: LoginPage },
    { path: "/auth/signup", component: SignupPage },
    { path: "/user/profile", component: ProfilePage },
    { path: "/user/upload", component: UploadPage },
    { path: '/:pathMatch(.*)*', component: ErrorPage },
  ],
});

export default router;
