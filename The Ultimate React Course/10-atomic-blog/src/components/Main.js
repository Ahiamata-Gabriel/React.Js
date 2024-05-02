import { Posts } from "./Posts";

import { FormAddPost } from "./FormAddPost";
function Main({ posts, onAddPost }) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

export default Main;
