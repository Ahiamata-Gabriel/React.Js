import { List } from "./List";
import { usePosts } from "../context/PostContext";

export function Posts() {
  const { posts } = usePosts();
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
