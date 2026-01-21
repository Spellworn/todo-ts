import styles from "../modulesCss/EditInput.module.css";
import { useCallback, useState } from "react";
import { Id } from "../type/types.ts";
import * as React from "react";
import { handleUpdateTask } from "../redux/toDoSlice.ts";
import { useAppDispatch } from "../redux/hooks.ts";

interface EditInputProps {
  id: Id;
  setIsEdit: (isEdit: boolean) => void;
}

export const EditInput = ({ id, setIsEdit }: EditInputProps) => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(handleUpdateTask({ id, text }));
      setIsEdit(false);
      setText("");
    },
    [dispatch, id, setIsEdit, text],
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
