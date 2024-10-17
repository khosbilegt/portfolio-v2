import { Stack } from "@mantine/core";
import { contentData } from "./homeData";

function HomeContent() {
  return (
    <Stack
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {contentData?.map((content: any) => {
        switch (content.type) {
          case "component":
            return content?.component ? content.component : <></>;
          default:
            return <></>;
        }
      })}
    </Stack>
  );
}

export default HomeContent;
