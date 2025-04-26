import styles from "../modulesCss/AddTask.module.css";
import { useCallback, useState } from "react";
import * as React from "react";
import { AddTaskProps } from "../type/types.ts";

// Компонент AddTask
export const AddTask = (props: AddTaskProps) => {
  const [text, setText] = useState("");
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      props.addNewTask(text);
      setText("");
    },
    [props, text],
  );

  return (
    <form className={styles.container}>
      <label className={styles.title} htmlFor="new-todo">
        Че нада сделать?
      </label>
      <input
        type="text"
        autoComplete="off"
        id="new-todo"
        className={styles.inputTodo}
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button className={styles.buttonAdd} type="submit" onClick={onClick}>
        Добавит
      </button>
    </form>
  );
};
