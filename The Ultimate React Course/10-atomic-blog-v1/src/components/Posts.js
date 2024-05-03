import { List } from "./List";
import { PostContext } from "../App";
import { useContext } from "react";

export function Posts() {
  const { posts } = useContext(PostContext);
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
