import { useQuery } from "@apollo/client";
import { GET_RECENT_POSTS, IResult } from "../../services/getRecentPost";

const PostWidget = () => {
  const { data } = useQuery<IResult | null>(GET_RECENT_POSTS);

  console.log(data);

  return <div>PostWidget</div>;
};

export default PostWidget;
