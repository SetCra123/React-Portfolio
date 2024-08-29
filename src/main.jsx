import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'


import App from './App';
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Error from './Error';


const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: '/Resume',
                element: <Resume />,
            },
            {
                path: '/Contact',
                element: <Contact />
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );