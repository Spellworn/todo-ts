import styles from "../modulesCss/Task.module.css";
import { EditTask } from "./EditTask.tsx";
import { DeleteTask } from "./DeleteTask.tsx";
import { useState } from "react";
import { TaskProps } from "../type/types.ts";

export const Task = (props: TaskProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <li className={styles.liWrapper}>
      {!isEdit && (
        <>
          <input
            className={styles.checkbox}
            id={String(props.id)}
            type="checkbox"
            defaultChecked={props.completed}
            onClick={() => props.completeTask(props.id)}
          />
          <label className={styles.textTodo} htmlFor={String(props.id)}>
            {props.name}
          </label>
        </>
      )}
      <div className={styles.buttonWrapper}>
        <EditTask
          editTask={props.editTask}
          id={props.id}
          name={props.name}
          isEdit={isEdit}
          toggleEdit={toggleEdit}
          setIsEdit={setIsEdit}
        />
        {!isEdit && <DeleteTask deleteTask={props.deleteTask} id={props.id} />}
      </div>
    </li>
  );
};
