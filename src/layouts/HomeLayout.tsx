import { Flex, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import HomeSidebar from "../features/home/HomeSidebar";
import Navbar from "../components/Navbar";
import useWindowDimensions from "../hooks/useWindowDimensions";

function HomeLayout() {
  const { width } = useWindowDimensions();
  const [isSiderOpen, { open: openSider, close: closeSider }] =
    useDisclosure(false);

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
      <Navbar
        isHamburgRequired={width < 1024}
        isSiderOpen={isSiderOpen}
        setSiderOpen={isSiderOpen ? closeSider : openSider}
      />
      <Flex
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <HomeSidebar
          isHamburgRequired={width < 1024}
          isSiderOpen={isSiderOpen}
          closeSider={closeSider}
        />
      </Flex>
    </Stack>
  );
}

export default HomeLayout;
