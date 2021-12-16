import { NavLink } from "react-router-dom";
import Atoms from "../Atoms";

const Navigation = () => {
  return (
    <>
      <Atoms.Nav type="global">
        <Atoms.Div
          display="flex"
          alignItems="center"
          maxWidth="1000px"
          height="100%"
          margin="0 auto"
          justifyContent="space-between"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Atoms.Div>
      </Atoms.Nav>
      <Atoms.Nav type="local">
        <Atoms.Div
          display="flex"
          alignItems="center"
          maxWidth="1000px"
          height="100%"
          margin="0 auto"
        >
          <NavLink to="/">KWHONG</NavLink>
        </Atoms.Div>
      </Atoms.Nav>
    </>
  );
};

export default Navigation;
