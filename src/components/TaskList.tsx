import { Task } from "./Task.tsx";
import styles from "../modulesCss/App.module.css";
import { TaskListProps } from "../type/types.ts";

export const TaskList = (props: TaskListProps) => {
  return (
    <ul className={styles.taskWrapper}>
      {props?.tasks?.map((task) => (
        <Task
          id={task.id}
          name={task.todo}
          completed={task.completed}
          key={task.id}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
          completeTask={props.completeTask}
        />
      ))}
    </ul>
  );
};
