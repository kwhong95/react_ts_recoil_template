import Atoms from "../Atoms";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../services/query";
import type { IResult } from "../../services/query";
import { PostCard } from "../Molecules";

const PostsGrid = () => {
  const { data, loading, error } = useQuery<IResult | null>(GET_POSTS);
  const posts =
    data?.postsConnection.edges.length !== 0
      ? data?.postsConnection.edges
      : null;

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!</div>;

  return (
    <Atoms.Div
      display="grid"
      gridTemplateColumns="repeat(1, minmax(0, 1fr))"
      gap="12rem"
    >
      <Atoms.Div gridColumn="span 1 / span 1">
        {posts?.map((post: any) => (
          <PostCard post={post.node} key={post.title} />
        ))}
      </Atoms.Div>
      <Atoms.Div gridColumn="span 1 / span 1">
        <Atoms.Div gridColumn="span 1 / span 1">
          <Atoms.Div position="relative" top="2rem">
            <Atoms.Div>PostWidget</Atoms.Div>
            <Atoms.Div>Categories</Atoms.Div>
          </Atoms.Div>
        </Atoms.Div>
      </Atoms.Div>
    </Atoms.Div>
  );
};

export default PostsGrid;
