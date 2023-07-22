import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./features/toggleTheme/toggleThemeSlice";

const App = () => {
  const theme = useSelector((state) => state.toggleTheme);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={theme.isDarkTheme ? "dark" : "light"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus id repellendus ab incidunt, nemo fugit culpa omnis
          explicabo non. Ipsum.
        </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(toggleTheme())}
      >
        {theme.isDarkTheme ? "Light Mode" : "Dark Mode"}
      </button>
      <div
        className={
          theme.isDarkTheme
            ? "bg-primary text-white"
            : "dark:bg-secondary dark:text-primary"
        }
      >
        <p>This is some content.</p>
      </div>
    </div>
  );
};

export default App;
