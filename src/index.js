import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import "./index.css";
import Login from "./screens/login/login";
import Home from "./screens/home/home";
import TabBar from "./components/tabbar";
import List from "./screens/list/list";
import store from './core/store/store'
import { Provider } from 'react-redux'
import Patient from "./screens/patient/patient";

const  NavbarWrapper = ()=>{
  return (
  <div style={{display:'flex', flexDirection:'column', height:'100%',width:'100vw'}}>
      <TabBar/>
      <Outlet/>
  </div>
  )
};


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {path: '/', element:<NavbarWrapper/>, children:[
    {path: '/home', element:<Home/> },
    {path: '/list', element:<List/> },
    {path: '/patient/:id', element:<Patient/> }
  ]}
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);