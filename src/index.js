import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom' //para criar o esquele do router
import Contact from './paginas/contact/contact';                     //pagina contato
import Home from './paginas/home/home';                              //pagina home
import ErrorPage from './paginas/errorPage/errorPage';               //pagina Erro

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,                                     //direciona caso haja um erro com a url
    children: [                                                     // paginas abaixo da hierarquia do app
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "contact",
        element: <Contact/>,
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
