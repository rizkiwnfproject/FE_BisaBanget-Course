import { Navigate } from "react-router"
import DetailClassFragment from "../components/fragment/class/DetailClassFragment"
import UserLayout from "../layouts/UserLayout"
import Class from "../pages/Class/Class"
import CreateClass from "../pages/Class/CreateClass"
import Course from "../pages/Course/Course"
import Dashboard from "../pages/Dashboard/Dashboard"
import Error from "../pages/Error/Error"

const UserRoutes = {
  path: "/user",
  element: <UserLayout />,
  children: [
    {
      index: true,
      element: <Navigate to="dashboard" replace />
    },
    {
      path: "dashboard",
      element: <Dashboard />
    },
    {
      path: "class",
      element: <Class />
    },
    {
      path: "class/create",
      element: <CreateClass />
    },
    {
      path: "class/edit/:id",
      element: <CreateClass />
    },
    {
      path: "class/detail/:id",
      element: <DetailClassFragment />
    },
    {
      path: "course",
      element: <Course />
    },
    { path: "*", element: <Error /> }
  ]
}

export default UserRoutes