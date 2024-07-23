import { useEffect, useState } from "react";

export const useExercise = (current) => {
  const [exercise, setExercise] = useState(current);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${current}`)
      .then((response) => response.json())
      .then((json) => setExercise(json));
  }, []);
  return exercise;
};
