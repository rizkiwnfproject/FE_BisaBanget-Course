import { Navigate, redirect } from "react-router"
import DetailClassFragment from "../components/fragment/class/DetailClassFragment"
import UserLayout from "../layouts/UserLayout"
import Class from "../pages/Class/Class"
import CreateClass from "../pages/Class/CreateClass"
import Dashboard from "../pages/Dashboard/Dashboard"
import Error from "../pages/Error/Error"
import Teacher from "../pages/Teacher/Teacher"
import { getClass, getClassById, getTeacherClasses, getTeacherClassesAdvisor } from "../services/classService"
import secureLocalStorage from "react-secure-storage"
import { STORAGE_KEY } from "../utils/const"
import { getSubject, getSubjectById, getTeacherSubjects } from "../services/subjectService"
import Subject from "../pages/Subject/Subject"
import CreateSubject from "../pages/Subject/CreateSubject"
import DetailSubject from "../pages/Subject/DetailSubject"
import { getAllUser, getUserById, getUserLogin } from "../services/authService"
import TeacherAssign from "../pages/Teacher/TeacherAssign"

const UserRoutes = {
  path: "/user",
  loader: async () => {
    const isLoggedIn = secureLocalStorage.getItem(STORAGE_KEY)
    if (!isLoggedIn) {
      throw redirect("/sign-in")
    }
    try {
      const user = await getUserLogin()
      return user
    } catch (error) {
      console.error("Failed to fetch user:", error)
      throw redirect("/sign-in")
    }
  },
  element: <UserLayout />,
  children: [
    {
      index: true,
      element: <Navigate to="dashboard" replace />
    },
    {
      path: "dashboard",
      loader: async () => {
        const isAdmin = await getUserLogin()
        console.log(isAdmin.data.role);


        if (isAdmin.data.role === "teacher") {
          const classes = await getTeacherClasses()
          const subject = await getTeacherSubjects()
          const advisor = await getTeacherClassesAdvisor()
          return { subject: subject.data, teacher: null, classes: classes.data, advisor: advisor.data, role: isAdmin.data.role }
        } else {
          const subject = await getSubject()
          const teacher = await getAllUser()
          const classes = await getClass()
          return { subject: subject.data, teacher: teacher.data, classes: classes.data, advisor: null, role: isAdmin.data.role }
        }
      },
      element: <Dashboard />
    },

    // class
    // adm approved
    {
      path: "class",
      loader: async () => {
        const user = await getUserLogin()
        console.log(user.data.role);

        if (user.data.role === "teacher") {
          const classes = await getTeacherClasses()
          return { classes: classes, role: user.role }
        } else {
          const classes = await getClass()
          return { classes: classes, role: user.data.role }
        }
      },
      element: <Class />
    },
    {
      path: "class/create",
      loader: async () => {
        const user = await getUserLogin()
        if (user.data.role !== "admin") {
          throw redirect("/user/class")
        }
        const users = await getAllUser()
        const subjects = await getSubject()
        return { users: users.data, subjects: subjects.data, classes: null, name: "Buat" }
      },
      element: <CreateClass />
    },
    {
      path: "class/edit/:id",
      loader: async ({ params }) => {

        const user = await getUserLogin()
        if (user.data.role !== "admin") {
          throw redirect("/user/class")
        }

        const users = await getAllUser()
        const subjects = await getSubject()
        const classes = await getClassById(params.id)
        return { users: users.data, subjects: subjects.data, classes: classes.data, name: "Edit" }
      },
      element: <CreateClass />
    },
    {
      path: "class/detail/:id",
      loader: async ({ params }) => {
        const user = await getUserLogin()
        const detailClass = await getClassById(params.id)
        console.log("detailClass: ", detailClass);

        return { detailClass: detailClass.data, role: user.data.role }
      },
      element: <DetailClassFragment />
    },


    // // teacher
    {
      path: "teacher",
      loader: async () => {
        const teacher = await getAllUser()
        const isAdmin = await getUserLogin()
        console.log(isAdmin.data.role)
        return { teacher: teacher.data, role: isAdmin.data.role }
      },
      element: <Teacher />
    },
    {
      path: "teacher/:id/assign-class-subject",
      loader: async ({ params }) => {
        const isAdmin = await getUserLogin()
        if (isAdmin.data.role !== "admin") {
          throw redirect("/user/class")
        }
        const classes = await getClass()
        const subjects = await getSubject()
        const user = await getUserById(params.id)
        return { classes: classes.data, subjects: subjects.data, user: user }
      },
      element: <TeacherAssign />
    },

    {
      path: "class-advisor",
      loader: async () => {
        const teacher = await getTeacherClassesAdvisor()

        return { teacher: teacher.data, role: "teacher" }
      },
      element: <Teacher />
    },




    // // subject
    {
      path: "subject",
      loader: async () => {
        const user = await getUserLogin()

        if (user.data.role === "teacher") {
          const subject = await getTeacherSubjects()
          // console.log(subject);
          
          return { subject: subject.data, role: user.data.role }
        }
        const subject = await getSubject()
        // console.log(subject);
        return { subject: subject.data, role: user.data.role }
      },
      element: <Subject />
    },
    {
      path: "subject/create",
      loader: async () => {
        const isAdmin = await getUserLogin()
        if (isAdmin.data.role !== "admin") {
          throw redirect("/user/class")
        }
        return { subject: null, name: "Buat", role: isAdmin.data.role }
      },
      element: <CreateSubject />
    },
    {
      path: "subject/edit/:id",
      loader: async ({ params }) => {
        const isAdmin = await getUserLogin()
        if (isAdmin.data.role !== "admin") {
          throw redirect("/user/class")
        }

        const subject = await getSubjectById(params.id)
        const user = await getUserLogin()
        return { subject: subject.data, name: "Edit", role: user.data.role }
      },
      element: <CreateSubject />
    },
    {
      path: "subject/detail/:id",
      loader: async ({ params }) => {
        const subject = await getSubjectById(params.id)
        const user = await getUserLogin()
        return { subject: subject.data, name: "Edit", role: user.data.role }
      },
      element: <DetailSubject />
    },
    { path: "*", element: <Error /> }
  ]
}

export default UserRoutes