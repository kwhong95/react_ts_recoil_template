import { CSSProperties } from "react";
import styled from "styled-components";

const Title = styled.h1<CSSProperties>`
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 700ms;
  text-align: center;
  justify-content: center;
  margin-bottom: 2rem;
  cursor: pointer;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;

  :hover {
    color: var(--pink-600);
  }
`;

export default Title;
