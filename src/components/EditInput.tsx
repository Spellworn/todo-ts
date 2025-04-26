import styles from "../modulesCss/EditInput.module.css";
import { useCallback, useState } from "react";
import { EditInputProps } from "../type/types.ts";
import * as React from "react";

export const EditInput = (props: EditInputProps) => {
  const [text, setText] = useState("");
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      props.editTask(text, props.id);
      props.setIsEdit(false);
      setText("");
    },
    [props, text],
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
        onClick={() => props.setIsEdit(false)}
      >
        Отмена
      </button>
    </form>
  );
};
