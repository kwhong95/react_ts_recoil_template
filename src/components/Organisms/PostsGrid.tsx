import Atoms from "../Atoms";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../services/query";
import type { IResult } from "../../services/query";
import { PostCard, PostSider } from "../Molecules";
import { FeaturedPosts } from ".";

const PostsGrid = () => {
  const { data, loading, error } = useQuery<IResult | null>(GET_POSTS);
  const posts =
    data?.postsConnection.edges.length !== 0
      ? data?.postsConnection.edges
      : null;

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!</div>;

  return (
    <ResponsiveDiv display="grid" gap="12rem">
      <FeaturedPosts />
      <ResponsiveDiv>
        {posts?.map((post: any) => (
          <PostCard post={post.node} key={post.title} />
        ))}
      </ResponsiveDiv>
      <PostSider />
    </ResponsiveDiv>
  );
};

export default PostsGrid;

const ResponsiveDiv = styled(Atoms.Div)`
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-column: span 1 / span 1;

  ${({ theme }) => theme.media.desktop`
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-column: span 8 / span 8;
  `}
`;
