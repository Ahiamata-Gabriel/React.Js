import "./App.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";

function App() {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
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
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
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
