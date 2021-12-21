import Atoms from "../Atoms";
import { PostsGrid, FeaturedPosts } from "../Organisms";

const Blog = () => {
  return (
    <Atoms.Container>
      <FeaturedPosts />
      <PostsGrid />
    </Atoms.Container>
  );
};

export default Blog;
