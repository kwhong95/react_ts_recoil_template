import Atoms from "../Atoms";
import { useQuery } from "@apollo/react-hooks";
import { useRecoilState } from "recoil";
import postDataState from "../../state/postData";
import { GET_POSTS } from "../../services/query";
import { useEffect } from "react";

const Blog = () => {
  const [postData, setPostData] = useRecoilState(postDataState);
  const { data } = useQuery(GET_POSTS);

  useEffect(() => {
    setPostData(data);
  });

  console.log(postData);

  return (
    <Atoms.Container>
      <Atoms.Div>BLOG PAGE</Atoms.Div>
    </Atoms.Container>
  );
};

export default Blog;
