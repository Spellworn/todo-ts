import styles from "../modulesCss/EditTask.module.css";
import { EditInput } from "./EditInput.tsx";
import { Id } from "../type/types.ts";

interface EditTaskProps {
  id: Id;
  isEdit: boolean;
  toggleEdit(): void;
  setIsEdit: (isEdit: boolean) => void;
}

export const EditTask = ({
  id,
  isEdit,
  toggleEdit,
  setIsEdit,
}: EditTaskProps) => {
  return (
    <div>
      {!isEdit && (
        <button
          className={styles.buttonEdit}
          type="button"
          onClick={toggleEdit}
        >
          Редактироват
        </button>
      )}
      {isEdit && <EditInput id={id} setIsEdit={setIsEdit} />}
    </div>
  );
};
