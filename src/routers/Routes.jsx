import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Colleges from "../pages/Colleges/Colleges";
import College from "../pages/Colleges/College/College";
import MyCollege from "../pages/MyCollege/MyCollege";
import Admission from "../pages/Admission/Admission";
import Home from "../pages/Home/Home";
import AdmissionForm from "../pages/Admission/AddmissionForm";
import PrivateRoute from "../routers/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "colleges",
        element: <Colleges />,
      },
      {
        path: "colleges/:id",
        element: (
          <PrivateRoute>
            <College />
          </PrivateRoute>
        ),
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "apply",
        element: (
          <PrivateRoute>
            <AdmissionForm />
          </PrivateRoute>
        ),
      },
      {
        path: "my-college",
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
]);

export default router;
