import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Routes.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
