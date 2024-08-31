import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './components/Portfolio';
import Contact from './pages/Contact';
import Error from './pages/Error';


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