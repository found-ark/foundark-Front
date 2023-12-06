import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./test.jsx";
import Test2 from "./test2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "/harbrel",
    element: <Test />,
  },
  {
    path: "/ella",
    element: <Test />,
  },
  {
    path: "/gaksder",
    element: <Test />,
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
