import React from "react";
import styled from "styled-components";

const SNav = styled.nav<NavProps>`
  position: absolute;

  a {
    font-size: ${({ type }) => type === "local" && "0.8em"};
  }

  ${(props) =>
    props.type === "global"
      ? {
          height: "44px",
          padding: "0 1rem",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 3,
        }
      : {
          height: "52px",
          top: "45px",
          left: 0,
          width: "100%",
          borderBottom: "1px solid var(--grey-400)",
          padding: "0 1rem",
          zIndex: 5,
        }}
`;

type NavProps = {
  type: "global" | "local";
  children: React.ReactNode;
};

const Nav = ({ type, children }: NavProps) => {
  return <SNav type={type}>{children}</SNav>;
};

export default Nav;
