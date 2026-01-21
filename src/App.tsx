import { TasksPage } from "./pages/TasksPage.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TasksPage />
      </div>
    </Provider>
  );
}

export default App;
