import Atoms from "../Atoms";
import usePostData from "../../state/postData";

const Blog = () => {
  const { postData, loading } = usePostData({
    loadingId: "postData",
  });

  if (loading) {
    return null;
  }

  console.log(postData);

  return (
    <Atoms.Container>
      <Atoms.Div>BLOG PAGE</Atoms.Div>
    </Atoms.Container>
  );
};

export default Blog;
