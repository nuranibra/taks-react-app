import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './pages/error';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './pages/home';
import Product from './pages/product';
import Services from './pages/services';
import Users from './pages/users';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<Error />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/page/product',
        element:<Product />
      },
      {
        path:'/page/services',
        element:<Services />
      },
      {
        path:'/page/users',
        element:<Users />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
