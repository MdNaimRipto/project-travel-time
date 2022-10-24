import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Secondary from "../Layout/Secondary";
import AllLocations from "../Pages/AllLocations/AllLocations";
import Destinations from "../Pages/Destinations/Destinations";
import Hotels from "../Pages/Destinations/Location/Hotels";
import Location from "../Pages/Destinations/Location/Location";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginSignup/Login";
import Registration from "../Pages/LoginSignup/Registration";
import CenterMode from "../Pages/Slider/Slider";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    return fetch("http://localhost:5000/locations");
                }
            },
            {
                path: "/home",
                element: <Home></Home>,
                loader: async () => {
                    return fetch("http://localhost:5000/locations");
                }
            },
            {
                path: "/destinations",
                element: <AllLocations></AllLocations>,
                loader: async () => {
                    return fetch("http://localhost:5000/allLocation");
                }
            },
            {
                path: "/location/:id",
                element: <Location></Location>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/location/${params.id}`);
                },
            },
            {
                path: "/allLocation",
                element: <AllLocations></AllLocations>,
                loader: async () => {
                    return fetch("http://localhost:5000/allLocation")
                }
            },
            {
                path: "/allLocation/:id",
                element: <Location></Location>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/allLocation/${params.id}`)
                }
            },
            {
                path: "/hotels/:id",
                element: <Hotels></Hotels>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/allLocation/${params.id}`)
                }
            }
        ]
    },
    {
        path: "/",
        element: <Secondary></Secondary>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    }
])