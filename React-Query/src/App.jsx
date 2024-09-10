import "./App.css";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  console.log(data);

  return (
    <div className="App">
      {data?.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.id}</h1>
          <h1>{todo.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
