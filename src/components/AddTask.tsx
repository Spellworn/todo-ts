import styles from "../modulesCss/AddTask.module.css";
import { useCallback, useState } from "react";
import { MouseEvent } from "react";

interface AddTaskProps {
  addNewTask: (text: string) => void;
}

export const AddTask = ({ addNewTask }: AddTaskProps) => {
  const [text, setText] = useState("");
  const onClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      addNewTask(text);
      setText("");
    },
    [addNewTask, text],
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
