import Atoms from "../Atoms";

const PostsGrid = () => {
  return (
    <Atoms.Div
      display="grid"
      gridTemplateColumns="repeat(1, minmax(0, 1fr))"
      gap="12rem"
    >
      <Atoms.Div gridColumn="span 1 / span 1">
        {/* {posts.map((post: any) => (
            <PostCard post={post.node} key={post.title} />
          ))} */}
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
