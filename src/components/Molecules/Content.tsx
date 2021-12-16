import { ReactNode } from "react";
import getQueryData from "../../utils/getQueryData";
import Atoms from "../Atoms";

export type ContentProps = {
  sticky: boolean;
  children?: ReactNode;
};

const Content = ({ sticky = true, children }: ContentProps) => {
  const { platform } = getQueryData();

  return (
    <Atoms.Div
      display={sticky ? "none" : "flex"}
      position={sticky ? "fixed" : "initial"}
      width={sticky ? "100%" : "initial"}
      left={sticky ? 0 : "initial"}
      padding={`var(--padding-${platform})`}
      alignItems="center"
      justifyContent="center"
      margin="5px 0"
      height="3em"
      fontSize="2.5rem"
      opacity={0}
      top="35vh"
    >
      {children}
    </Atoms.Div>
  );
};

export default Content;
