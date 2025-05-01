import { Task } from "./Task.tsx";
import styles from "../modulesCss/App.module.css";
import { Tasks } from "../type/types.ts";

interface TaskListProps {
  tasks: Tasks[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <ul className={styles.taskWrapper}>
      {tasks?.map((task) => (
        <Task
          id={task.id}
          name={task.todo}
          completed={task.completed}
          key={task.id}
        />
      ))}
    </ul>
  );
};
