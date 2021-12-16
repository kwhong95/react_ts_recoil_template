import { NavLink } from "react-router-dom";
import Atoms from "../Atoms";
import { pages } from "../Pages";

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
          {pages.map((page, idx) => (
            <NavLink
              key={idx}
              to={page.path}
              style={({ isActive }) => ({ color: isActive ? "gray" : "black" })}
            >
              {page.title}
            </NavLink>
          ))}
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
