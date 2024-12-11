import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TodoPage from "./TodoComponents/TodoPage";
import Registerform from "./RegisterComponents/RegisterForm";
import Convert from "./TempConvertComponents/TempConvert";
import {createBrowserRouter,RouterProvider,Route} from "react-router-dom";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
      index: true, 
      element: <App/> 
      },
      {
        path: "/Todo",
        element: <TodoPage/>
      },
      {
        path: "/Reg",
        element: <Registerform/>
      },
      {
        path: "/Convert",
        element: <Convert/>
      },
              ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
