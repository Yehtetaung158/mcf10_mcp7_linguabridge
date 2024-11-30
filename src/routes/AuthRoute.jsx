import { lazy, Suspense } from "react";
import PageLoadingComponent from "../components/PageLoadingComponent";
const LogInPage = lazy(() => import("../feature/auth/pages/LogInPage"));
const SignUpPage = lazy(() => import("../feature/auth/pages/SignUpPage"));

const AuthRoutes = [
  {
    path: "/singup",
    element: (
      <Suspense fallback={<PageLoadingComponent />}>
        <SignUpPage />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<PageLoadingComponent />}>
        <LogInPage />
      </Suspense>
    ),
  },
];

export default AuthRoutes;
