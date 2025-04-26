import styles from "../modulesCss/EditTask.module.css";
import { DeleteTaskProps } from "../type/types.ts";

export const DeleteTask = (props: DeleteTaskProps) => {
  return (
    <button
      id={String(props.id)}
      className={styles.buttonDelete}
      type="button"
      onClick={() => props.deleteTask(props.id)}
    >
      Удалит
    </button>
  );
};
