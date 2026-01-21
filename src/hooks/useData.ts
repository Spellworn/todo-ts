import { useEffect } from "react";
import { fetchTodos, selectTodos } from "../redux/toDoSlice.ts";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";

export const useData = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return { todos };
};
