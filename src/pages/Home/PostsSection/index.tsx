import Post from "../../../components/Post";
import { useAsync } from "../../../hooks/useAsync";
import type { Post as PostType } from "../../../models/posts";
import { fetchPosts } from "../../../services/posts";

export interface Properties {
  maxPostsLength?: number;
}

export default function PostsSection(props: Properties) {
  const { data } = useAsync<PostType[]>(() => fetchPosts({
    maxPosts: props.maxPostsLength || 5,
  }));

  if (!data) {
    return <></>;
  }

  return (
    data.map(post => <Post post={post} />)
  )
}
