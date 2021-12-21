import Atoms from "../Atoms";

interface PostCardProps {
  post: any;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  console.log(post);
  return (
    <Atoms.Div
      background="white"
      boxShadow="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
      borderRadius="0.5rem"
      padding="0"
      paddingBottom="2.5rem"
      marginBottom="2rem"
    >
      <Atoms.Div
        position="relative"
        overflow="hidden"
        box-shadow="0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
        paddingBottom="20rem"
        marginBottom="1.5rem"
      >
        <Atoms.Img
          objectPosition="top"
          position="absolute"
          height="20rem"
          width="100%"
          objectFit="cover"
          boxShadow="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
          borderTopLeftRadius="0.5rem"
          borderTopRightRadius="0.5rem"
          src={post.featuredImage.url}
          alt={post.title}
        />
      </Atoms.Div>
    </Atoms.Div>
  );
};

export default PostCard;
