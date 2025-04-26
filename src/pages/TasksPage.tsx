import styles from "../modulesCss/App.module.css";
import { AddTask } from "../components/AddTask.tsx";
import { SortTask } from "../components/SortTask.tsx";
import { TaskList } from "../components/TaskList.tsx";
import { useData } from "../hooks/useData.ts";
import { useFilter } from "../hooks/useFilter.ts";

export const TasksPage = () => {
  const { addNewTask, completeTask, editTask, deleteTask, data } = useData();
  const [setFilter, filteredTask] = useFilter(data);

  return (
    <section>
      <h1 className={styles.title}>Домашнее задание слушаем</h1>
      <AddTask addNewTask={addNewTask} />
      <SortTask setFilter={setFilter} />
      <h3 className={styles.title2}>
        {filteredTask !== undefined && filteredTask.length} задания осталос
      </h3>

      <TaskList
        tasks={filteredTask}
        deleteTask={deleteTask}
        editTask={editTask}
        completeTask={completeTask}
      />
    </section>
  );
};
