import styles from "../modulesCss/EditTask.module.css";
import { Id } from "../type/types.ts";
import { handleDeleteTask } from "../redux/toDoSlice.ts";
import { useAppDispatch } from "../redux/hooks.ts";

interface DeleteTaskProps {
  id: Id;
}

export const DeleteTask = ({ id }: DeleteTaskProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      id={String(id)}
      className={styles.buttonDelete}
      type="button"
      onClick={() => dispatch(handleDeleteTask(id))}
    >
      Удалит
    </button>
  );
};
