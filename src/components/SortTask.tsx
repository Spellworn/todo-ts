import styles from "../modulesCss/SortTask.module.css";
import { FilterType } from "../type/types.ts";

interface SortTaskProps {
  setFilter: (filter: FilterType) => void;
}

export const SortTask = ({ setFilter }: SortTaskProps) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.buttonSort}
        type="button"
        onClick={() => setFilter("all")}
      >
        Все задания
      </button>
      <button
        className={styles.buttonSort}
        type="button"
        onClick={() => setFilter("completed")}
      >
        Выполненные
      </button>
      <button
        className={styles.buttonSort}
        type="button"
        onClick={() => setFilter("uncompleted")}
      >
        Еще нада сделат
      </button>
    </div>
  );
};
