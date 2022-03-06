import axios from "axios";
import { useQuery } from "react-query";
import Todo from "./Todo";

const fetchTodoList = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};

export default function TodoList() {
  const { isLoading, data } = useQuery("todos", fetchTodoList, {
    cacheTime: 5000,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <ul>
      {data.data.map((todo) => (
        <Todo key={todo.id} title={todo.title} />
      ))}
    </ul>
  );
}
