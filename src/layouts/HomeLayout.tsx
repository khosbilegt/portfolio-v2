import { Flex, Stack } from "@mantine/core";
import HomeSidebar from "../features/home/HomeSidebar";
import Navbar from "../components/Navbar";

function HomeLayout() {
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
      <Navbar />
      <Flex
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <HomeSidebar />
      </Flex>
    </Stack>
  );
}

export default HomeLayout;
