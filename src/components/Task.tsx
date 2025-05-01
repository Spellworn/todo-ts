import styles from "../modulesCss/Task.module.css";
import { EditTask } from "./EditTask.tsx";
import { DeleteTask } from "./DeleteTask.tsx";
import { useState } from "react";
import { Id } from "../type/types.ts";
import { useTaskContext } from "../context/TaskContext.ts";

interface TaskProps {
  id: Id;
  name: string;
  completed: boolean;
}

export const Task = ({ id, name, completed }: TaskProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const { completeTask } = useTaskContext();
  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <li className={styles.liWrapper}>
      {!isEdit && (
        <>
          <input
            className={styles.checkbox}
            id={String(id)}
            type="checkbox"
            defaultChecked={completed}
            onClick={() => completeTask(id)}
          />
          <label className={styles.textTodo} htmlFor={String(id)}>
            {name}
          </label>
        </>
      )}
      <div className={styles.buttonWrapper}>
        <EditTask
          id={id}
          isEdit={isEdit}
          toggleEdit={toggleEdit}
          setIsEdit={setIsEdit}
        />
        {!isEdit && <DeleteTask id={id} />}
      </div>
    </li>
  );
};
