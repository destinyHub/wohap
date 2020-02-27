import React from "react";
const Home = React.lazy(() => import("../pages/home"));
const About = React.lazy(() => import("../pages/about"));
const Notfound =React.lazy(() => import("../pages/notfound"));

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

        exact: true,
        name: "404",
        component: Notfound
    }
];

export  default  routes;