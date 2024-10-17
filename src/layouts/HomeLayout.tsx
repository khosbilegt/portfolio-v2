import { Flex } from "@mantine/core";
import HomeSidebar from "../features/home/HomeSidebar";

function HomeLayout() {
  return (
    <Flex
      style={{
        width: "100%",
        height: "100%",
        minWidth: "100vw",
        minHeight: "100vh",
        background: "#f5faf6",
      }}
    >
      <HomeSidebar />
    </Flex>
  );
}

export default HomeLayout;
