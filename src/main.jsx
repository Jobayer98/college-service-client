import ReactDOM from "react-dom/client";
import store from "./app/store.js";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Routes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div>
      <RouterProvider router={router} />
    </div>
  </Provider>
);
