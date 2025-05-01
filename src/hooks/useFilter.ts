import { useEffect, useState } from "react";
import type { FilterType, Tasks } from "../type/types";

export const useFilter = (props: Tasks[]) => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [filteredTask, setFilteredTask] = useState(props);

  useEffect(() => {
    switch (filter) {
      case "completed":
        setFilteredTask(props.filter((task) => task.completed));
        break;
      case "uncompleted":
        setFilteredTask(props.filter((task) => !task.completed));
        break;
      default:
        setFilteredTask(props);
        break;
    }
  }, [filter, props]);
  return [setFilter, filteredTask] as const;
};
