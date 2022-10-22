import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Destinations from "../Pages/Destinations/Destinations";
import Location from "../Pages/Destinations/Location/Location";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/destinations",
                element: <Destinations></Destinations>,
                loader: async () => {
                    return fetch("http://localhost:5000/locations");
                }
            },
            {
                path: "/location/:id",
                element: <Location></Location>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/location/${params.id}`);
                },
            }
        ]
    }
])