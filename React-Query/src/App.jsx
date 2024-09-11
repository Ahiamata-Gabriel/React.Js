import "./App.css";
import { useQuery, useMutation } from "@tanstack/react-query";

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationFn: (newPost) =>
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
      }).then((res) => res.json()),
  });

  if (error || isError) return <div>Failed to load data</div>;

  if (isLoading || isPending) return <div>Data is loading</div>;

  return (
    <div className="App">
      <button
        onClick={() =>
          mutate({
            userId: 44,
            id: 144,
            title: "BIG DAWG",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          })
        }
      >
        Add Post
      </button>

      {data?.map((todo) => (
        <div key={todo.id}>
          <h5>{todo.id}</h5>
          <h3>{todo.title}</h3>
          <p>{todo.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
