import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main'
import Home from "../../Pages/Home/Home/Home";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Register from "../../Pages/Register/Register";
import Login from './../../Pages/Login/Login';

export const my_router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {path: '/', element: <Home></Home>},
            {path: '/home', element: <Home></Home>},
            {path: '/login', element: <Login></Login>},
            {path: '/register', element: <Register></Register>},

            {path: '*', element: <PageNotFound></PageNotFound>}
        ]
    }
])