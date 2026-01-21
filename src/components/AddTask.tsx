import styles from "../modulesCss/AddTask.module.css";
import { useCallback, useState } from "react";
import { MouseEvent } from "react";
import { handleAddNewTask } from "../redux/toDoSlice.ts";
import { useAppDispatch } from "../redux/hooks.ts";

export const AddTask = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const onClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(handleAddNewTask(text));
      setText("");
    },
    [dispatch, text],
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
