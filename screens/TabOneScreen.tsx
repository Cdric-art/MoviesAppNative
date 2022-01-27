import { Container } from "../components/Container";
import { Title } from "../components/Title";
import { HomeView } from "./HomeView";

export default function TabOneScreen() {
  return (
    <Container>
      <Title>Movies App</Title>
      <HomeView />
    </Container>
  );
}
