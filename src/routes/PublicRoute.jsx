import { Navigate } from "react-router"
import PublicLayout from "../layouts/PublicLayout"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Error from "../pages/Error/Error"

const PublicRoutes = {
  path: "/",
  element: <PublicLayout />,
  children: [
    {
      index: true,
      element: <Navigate to="sign-in" replace />
    },
    {
      path: "sign-in",
      element: <SignIn />
    },
    {
      path: "sign-up",
      element: <SignUp />
    },
    { path: "*", element: <Error /> }
  ]
}

export default PublicRoutes