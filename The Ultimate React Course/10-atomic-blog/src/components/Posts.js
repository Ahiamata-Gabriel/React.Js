import { List } from "./List";

export function Posts({ posts }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
