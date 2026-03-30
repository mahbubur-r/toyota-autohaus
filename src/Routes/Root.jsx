import { createBrowserRouter } from "react-router";
import Layout from '../Layouts/Layout'
import Home from "../components/Home";
import About from "../components/About";
import NewCars from "../components/NewCars/NewCars";
import CarLeasing from "../components/CarLeasing/CarLeasing";
import UsedCars from "../components/UsedCars/UsedCars";
import Service from "../components/Service/Service";

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
            },
            {
                path: '/new-cars',
                Component: NewCars
            },
            {
                path: '/used-cars',
                Component: UsedCars
            },
            {
                path: '/car-leasing',
                Component: CarLeasing
            },
            {
                path: '/service',
                Component: Service
            }

        ]



    },
]);

export default router;