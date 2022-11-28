import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { my_router } from './Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <div>
            <RouterProvider router={my_router} ></RouterProvider>
            <ToastContainer />
        </div>
    );
};

export default App;