import { Helmet } from "react-helmet";
import Atoms from "../Atoms";

const Home = () => {
  return (
    <Atoms.Div height="100%">
      <Helmet title="Home" />
      <Atoms.Section>
        <h1>Hello This is Home</h1>
      </Atoms.Section>
      <Atoms.Section>
        <h1>2nd Section!</h1>
      </Atoms.Section>
    </Atoms.Div>
  );
};

export default Home;
