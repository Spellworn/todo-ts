import styles from "../modulesCss/EditTask.module.css";
import { Id } from "../type/types.ts";
import { useTaskContext } from "../context/TaskContext.ts";

interface DeleteTaskProps {
  id: Id;
}

export const DeleteTask = ({ id }: DeleteTaskProps) => {
  const { deleteTask } = useTaskContext();

  return (
    <button
      id={String(id)}
      className={styles.buttonDelete}
      type="button"
      onClick={() => deleteTask(id)}
    >
      Удалит
    </button>
  );
};
