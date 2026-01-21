import styles from "../modulesCss/Task.module.css";
import { EditTask } from "./EditTask.tsx";
import { DeleteTask } from "./DeleteTask.tsx";
import { useState } from "react";
import { Id } from "../type/types.ts";
import { handleUpdateTask } from "../redux/toDoSlice.ts";
import { useAppDispatch } from "../redux/hooks.ts";

interface TaskProps {
  id: Id;
  name: string;
  completed: boolean;
}

export const Task = ({ id, name, completed }: TaskProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();
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
            onClick={() => dispatch(handleUpdateTask({ id, text: null }))}
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
