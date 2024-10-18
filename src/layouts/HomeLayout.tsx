import { Flex, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import useWindowDimensions from "../hooks/useWindowDimensions";

function HomeLayout() {
  // const { width } = useWindowDimensions();
  // const [isSiderOpen, { open: openSider, close: closeSider }] =
  // useDisclosure(false);

  return (
    <Stack
      style={{
        width: "100%",
        height: "100%",
        minWidth: "100vw",
        minHeight: "100vh",
        background: "#1E2129",
      }}
    >
      <Flex
        style={{
          width: "100%",
          height: "100%",
        }}
      ></Flex>
    </Stack>
  );
}

export default HomeLayout;
