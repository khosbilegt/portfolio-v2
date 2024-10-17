import { Flex, Stack } from "@mantine/core";
import { contentData } from "../homeData";
import { HomeHero } from "../";

function HomeContent() {
  const handleComponent = (name: string) => {
    switch (name) {
      case "HomeHero":
        return <HomeHero />;
      default:
        return <></>;
    }
  };

  return (
    <Stack
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {contentData?.map((content: any, index: number) => {
        let reactNode = <></>;
        switch (content.type) {
          case "component":
            reactNode = handleComponent(content.name);
            break;
          default:
            reactNode = <></>;
            break;
        }
        return (
          <Flex key={index} style={{ width: "100%", height: "100%" }}>
            {reactNode}
          </Flex>
        );
      })}
    </Stack>
  );
}

export default HomeContent;
