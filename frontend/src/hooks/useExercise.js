import { useEffect, useState } from "react";

export const useExercise = () => {
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setExercise(json));
  }, []);
  return exercise;
};
