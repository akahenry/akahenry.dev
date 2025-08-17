import type { Post } from "../../models/posts"

export interface Properties {
  post: Post;
};

export default function Post(props: Properties) {
  return (
    <>
      <a href={props.post.url}>{props.post.title}</a>
    </>
  )
}
