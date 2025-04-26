import styles from "../modulesCss/SortTask.module.css";
import { SortTaskProps } from "../type/types.ts";

export const SortTask = (props: SortTaskProps) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.buttonSort}
        type="button"
        onClick={() => props.setFilter("all")}
      >
        Все задания
      </button>
      <button
        className={styles.buttonSort}
        type="button"
        onClick={() => props.setFilter("completed")}
      >
        Выполненные
      </button>
      <button
        className={styles.buttonSort}
        type="button"
        onClick={() => props.setFilter("uncompleted")}
      >
        Еще нада сделат
      </button>
    </div>
  );
};
