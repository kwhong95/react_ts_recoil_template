import { CSSProperties } from "react";
import styled from "styled-components";

type ContainerProps = {
  currentSection?: number;
};

const Container = styled.main<CSSProperties & ContainerProps>`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  margin-bottom: 2rem;
  margin-top: 6rem;
`;

export default Container;
