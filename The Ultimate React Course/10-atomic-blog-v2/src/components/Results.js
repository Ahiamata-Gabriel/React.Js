import { usePosts } from "../context/PostContext";

function Results() {
  const { posts } = usePosts();
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
