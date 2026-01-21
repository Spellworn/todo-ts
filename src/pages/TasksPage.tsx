import styles from "../modulesCss/App.module.css";
import { AddTask } from "../components/AddTask.tsx";
import { SortTask } from "../components/SortTask.tsx";
import { TaskList } from "../components/TaskList.tsx";
import { useData } from "../hooks/useData.ts";
import { useFilter } from "../hooks/useFilter.ts";
import { store } from "../redux/store.ts";

export const TasksPage = () => {
  const { todos } = useData();
  const [setFilter, filteredTask] = useFilter(todos);

  console.log(store.getState());
  return (
    <section>
      <h1 className={styles.title}>Домашнее задание слушаем</h1>
      <AddTask />
      <SortTask setFilter={setFilter} />
      <h3 className={styles.title2}>
        {filteredTask !== undefined && filteredTask.length} задания осталос
      </h3>
      <TaskList tasks={filteredTask} />
    </section>
  );
};
