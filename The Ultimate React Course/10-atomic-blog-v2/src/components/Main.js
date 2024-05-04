import { Posts } from "./Posts";
import { FormAddPost } from "./FormAddPost";

function Main() {
  // const { posts, onAddPost } = useContext(PostContext);
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
}

export default Main;
