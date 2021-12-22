import styled from "styled-components";
import Atoms from "../Atoms";
import { Link } from "react-router-dom";
import moment from "moment";

interface PostCardProps {
  post: any;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  console.log(post);
  return (
    <ResponsiveDiv
      background="white"
      boxShadow="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
      borderRadius="0.5rem"
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
        <ResponsiveImg
          objectPosition="top"
          position="absolute"
          height="20rem"
          width="100%"
          objectFit="cover"
          boxShadow="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
          src={post.featuredImage.url}
          alt={post.title}
        />
      </Atoms.Div>

      <Atoms.Title>
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </Atoms.Title>
      <PostInfo>
        <AuthorInfo>
          <AuthorImg alt={post.author.name} src={post.author.photo.url} />
          <AuthorName>{post.author.name}</AuthorName>
        </AuthorInfo>
        <Atoms.Div fontWeight="500" color="var(--grey-700)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            style={{
              height: "1.5rem",
              width: "1.5rem",
              display: "inline",
              marginRight: "0.5rem",
              color: "var(--pink-500)",
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span style={{ verticalAlign: "middle" }}>
            {moment(post.createAt).format("MMM DD, YYYY")}
          </span>
        </Atoms.Div>
      </PostInfo>
      <PostExcerpt>{post.excerpt}</PostExcerpt>
      <Atoms.Div textAlign="center">
        <Link to={`/post/${post.slug}`}>
          <DetailButton>Continue Reading</DetailButton>
        </Link>
      </Atoms.Div>
    </ResponsiveDiv>
  );
};

export default PostCard;

const ResponsiveDiv = styled(Atoms.Div)`
  padding: 0;

  ${({ theme }) => theme.media.desktop`
    padding: 2rem;
  `}
`;

const ResponsiveImg = styled(Atoms.Img)`
  border-top-left-radius="0.5rem"
  border-top-right-radius="0.5rem"

  ${({ theme }) => theme.media.desktop`
    border-radius: 0.5rem;
  `}
`;

const PostInfo = styled(Atoms.Div)`
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;

  ${({ theme }) => theme.media.desktop`
    display: flex;
  `}
`;

const AuthorInfo = styled(Atoms.Div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
  margin-right: 2rem;

  ${({ theme }) => theme.media.desktop`
    margin-bottom: 0;
    width: auto;
  `}
`;

const AuthorImg = styled(Atoms.Img)`
  height: 30px;
  width: 30px;
  vertical-align: middle;
  border-radius: 9999px;
`;

const AuthorName = styled.p`
  display: inline;
  vertical-align: middle;
  color: var(--grey-700);
  margin-left: 0.5rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const PostExcerpt = styled.p`
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: var(--grey-700);
  font-weight: 300;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.media.desktop`
    padding-left: 5rem;
    padding-right: 5rem;
  `}
`;

const DetailButton = styled.span`
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  display: inline-block;
  background: var(--pink-600);
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 300;
  border-radius: 9999px;
  color: var(--white);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  cursor: pointer;

  :hover {
    transform: translateY(-0.25rem);
  }
`;
