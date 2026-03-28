import { createBrowserRouter } from "react-router";
import Layout from '../Layouts/Layout'
import Home from "../components/Home";
import About from "../components/About";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
            path: '/',
            index: true,
            Component: Home
            },
            {
                path: '/about',
                Component: About
            }

        ]



    },
]);

export default router;