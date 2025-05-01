import styles from "../modulesCss/EditInput.module.css";
import { useCallback, useState } from "react";
import { Id } from "../type/types.ts";
import * as React from "react";
import { useTaskContext } from "../context/TaskContext.ts";

interface EditInputProps {
  id: Id;
  setIsEdit: (isEdit: boolean) => void;
}

export const EditInput = ({ id, setIsEdit }: EditInputProps) => {
  const { editTask } = useTaskContext();
  const [text, setText] = useState("");
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      editTask(text, id);
      setIsEdit(false);
      setText("");
    },
    [editTask, id, setIsEdit, text],
  );

  return (
    <form className={styles.container}>
      <input
        type="text"
        className={styles.inputTodo}
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button className={styles.buttonEdit} type="submit" onClick={onClick}>
        Добавит
      </button>
      <button
        className={styles.buttonCancel}
        type="button"
        onClick={() => setIsEdit(false)}
      >
        Отмена
      </button>
    </form>
  );
};
