import "./App.css";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  if (error) return <div>Failed to load data</div>;

  if (isLoading) return <div>Data is loading</div>;

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
