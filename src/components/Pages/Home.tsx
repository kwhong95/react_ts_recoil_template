import { Helmet } from "react-helmet";
import Atoms from "../Atoms";
import { Content } from "../Molecules";
import { useRecoilState } from "recoil";
import { CurrentSection } from "../../state";

const Home = () => {
  const [currentSection, updateCurrentSection] = useRecoilState(CurrentSection);

  return (
    <Atoms.Container currentSection={currentSection}>
      <Helmet title="KWHong|HOME" />
      <Atoms.Section>
        <Atoms.Title>Front End Developer</Atoms.Title>
        <Content sticky>
          <Atoms.Text>안녕하세요</Atoms.Text>
        </Content>
      </Atoms.Section>
      <Atoms.Section>
        <Atoms.Title>2nd Section!</Atoms.Title>
      </Atoms.Section>
    </Atoms.Container>
  );
};

export default Home;
