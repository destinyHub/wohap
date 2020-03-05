import React from "react";
const Home = React.lazy(() => import("../pages/home"));
const About = React.lazy(() => import("../pages/about"));
const Notfound =React.lazy(() => import("../pages/notfound"));
const Login =React.lazy(() => import("../pages/login/login"));
const SignUp =React.lazy(() => import("../pages/register/register"));

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

        exact: true,
        name: "404",
        component: Notfound
    }
];

export  default  routes;