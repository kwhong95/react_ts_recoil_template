import { CSSProperties } from "react";
import styled from "styled-components";

type ContainerProps = {
  currentSection?: number;
};

const Container = styled.main<CSSProperties & ContainerProps>`
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  margin-bottom: 2rem;
  margin-top: 7rem;
`;

export default Container;
