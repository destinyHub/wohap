import React from "react";
const Home = React.lazy(() => import("../pages/home"));
const About = React.lazy(() => import("../pages/about"));
const Notfound =React.lazy(() => import("../pages/notfound"));
const Login =React.lazy(() => import("../pages/login/login"));
const SignUp =React.lazy(() => import("../pages/register/register"));
const InfoBarang = React.lazy(() => import("../pages/infobarang/infobarang"));
const Testimoni = React.lazy(() => import("../pages/testimoni/testimoni"));
const routes = [
    {
        path: "/",
        exact: true,
        name: "home",
        component: Home
    },
    {
        path: "/about",
        exact: true,
        name: "about",
        component: About
    },
    {
        path: "/login",
        exact: true,
        name: "login",
        component: Login
    },
    {
        path: "/signup",
        exact: true,
        name: "signup",
        component: SignUp
    },
    {
        path: "/infobarang",
        exact: true,
        name: "infobarang",
        component: InfoBarang
    },
    {
        path: "/testimoni",
        exact: true,
        name: "testimoni",
        component: Testimoni
    },
    {

        exact: true,
        name: "404",
        component: Notfound
    }
];

export  default  routes;