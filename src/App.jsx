import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//redux
import store from './reducer'
import { Provider } from 'react-redux'
//component
import Layout from "./Layout.jsx";
import Harbrel from "./page/harbrel/index.jsx";
import Ella from "./page/ella/index.jsx";
import Cho from "./page/cho/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        index: true,
        element: <Harbrel />,
      },
      {
        path: "/harbrel",
        element: <Harbrel />,
      },
      {
        path: "/ella",
        element: <Ella />,
      },
      {
        path: "/cho",
        element: <Cho />,
      }
    ]
  },
  
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
