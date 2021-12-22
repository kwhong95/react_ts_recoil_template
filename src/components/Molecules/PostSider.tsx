import Atoms from "../Atoms";
import styled from "styled-components";

const PostSider = () => {
  return (
    <Container>
      <Devider position="relative" top="2rem"></Devider>
    </Container>
  );
};

export default PostSider;

const Container = styled(Atoms.Div)`
  grid-column: span 1 / span 1;

  ${({ theme }) => theme.media.desktop`
    grid-column: span 4 / span 4;
  `}
`;

const Devider = styled(Atoms.Div)`
  position: relative;
  top: 2rem;

  ${({ theme }) => theme.media.desktop`
    position: sticky;
  `}
`;
