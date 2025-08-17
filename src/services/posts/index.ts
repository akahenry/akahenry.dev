import type { Post } from "../../models/posts";

export interface Parameters {
  maxPosts: number;
};

export async function fetchPosts(params: Parameters): Promise<Post[]> {
  return Promise.resolve([{
    title: "foo",
    url: "https://foo.bar/"
  }]);
}
