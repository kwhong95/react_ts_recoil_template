import styled from "styled-components";

const Img = styled.img<React.CSSProperties>`
  position: ${({ position }) => position};
  object-position: ${({ objectPosition }) => objectPosition};
  ${({ height }) => height && `height : ${height}`};
  ${({ width }) => width && `width : ${width}`};
  ${({ objectFit }) => objectFit};
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-top-left-radius: ${({ borderTopLeftRadius }) => borderTopLeftRadius};
  border-top-right-radius: ${({ borderTopRightRadius }) =>
    borderTopRightRadius};
`;

export default Img;
