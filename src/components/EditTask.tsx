import styles from "../modulesCss/EditTask.module.css";
import { EditInput } from "./EditInput.tsx";
import { EditTaskProps } from "../type/types.ts";

export const EditTask = (props: EditTaskProps) => {
  return (
    <div>
      {!props.isEdit && (
        <button
          className={styles.buttonEdit}
          type="button"
          onClick={props.toggleEdit}
        >
          Редактироват
        </button>
      )}
      {props.isEdit && (
        <EditInput
          editTask={props.editTask}
          id={props.id}
          key={props.id}
          setIsEdit={props.setIsEdit}
        />
      )}
    </div>
  );
};
