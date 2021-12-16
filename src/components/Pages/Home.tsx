import { Helmet } from "react-helmet";
import Atoms from "../Atoms";
import { Content } from "../Molecules";

const Home = () => {
  return (
    <Atoms.Div height="100%">
      <Helmet title="Home" />
      <Atoms.Section>
        <Atoms.Title>Front End Developer</Atoms.Title>
        <Content sticky>
          <Atoms.Text>안녕하세요</Atoms.Text>
        </Content>
      </Atoms.Section>
      <Atoms.Section>
        <Atoms.Title>2nd Section!</Atoms.Title>
      </Atoms.Section>
    </Atoms.Div>
  );
};

export default Home;
