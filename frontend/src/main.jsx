import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./routes/Home.jsx";
import CreateProva from "./routes/CreateProva.jsx";
import CreateProva2 from "./routes/CreateProva2.jsx";
import CreateProva3 from "./routes/CreateProva3.jsx";
import Provas from "./routes/Provas.jsx";
import Provas2 from "./routes/Provas2.jsx";
import Sucesso from "./routes/Sucesso.jsx"


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/prova/new",
        element: <CreateProva />,
      },
      {
        path: "/prova/new2",
        element: <CreateProva2 />,
      },
      {
        path: "/prova/new3",
        element: <CreateProva3 />,
      },
      {
        path: "/prova/1ano",
        element: <Provas />,
      },
      {
        path: "/prova/2ano",
        element: <Provas2 />,
      },
      {
        path: "/sucesso",
        element: <Sucesso />,
      },
    ],
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
