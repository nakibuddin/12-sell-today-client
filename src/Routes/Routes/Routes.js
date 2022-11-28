import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main'
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
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
            {path: '/blog', element: <Blog></Blog>},
            {path: '/add-product', element: <AddProduct></AddProduct>},
            // {path: '/categories/:id', element: <Products></Products>},

            {
                path: '/categories/:id', 
                loader: async ({params}) => await fetch(`http://localhost:5000/categories/${params.id}`),
                element: <Products></Products>
            },
            

            {path: '*', element: <PageNotFound></PageNotFound>}
        ]
    }
])