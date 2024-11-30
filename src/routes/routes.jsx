import { createBrowserRouter } from "react-router-dom";
import MainLayoud from "../components/MainLayoud";
import AuthRoutes from "./AuthRoute";
import PageRoutes from "./PageRoutes";
import NotFoundPage from "../feature/notfound/NotFoundPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoud />,
    errorElement: <NotFoundPage />,
    children: [...PageRoutes],
  },
  ...AuthRoutes,
  ,
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default routes;
