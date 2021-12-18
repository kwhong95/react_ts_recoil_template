import Atoms from "../Atoms";
import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS } from "../../services/query";

const Blog = () => {
  const { data } = useQuery(GET_POSTS);

  console.log(data);

  return (
    <Atoms.Container>
      <Atoms.Div>BLOG PAGE</Atoms.Div>
    </Atoms.Container>
  );
};

export default Blog;
