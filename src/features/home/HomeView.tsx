import { Stack } from "@mantine/core";
import { HomeHero } from "./components";
import HomeExperience from "./components/HomeExperience";

function HomeView() {
  return (
    <Stack style={{ width: "100%" }}>
      <HomeHero />
      <HomeExperience />
    </Stack>
  );
}

export default HomeView;
