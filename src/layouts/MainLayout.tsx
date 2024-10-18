import { Flex, Stack } from "@mantine/core";
import { Navbar } from "../components";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      style={{
        width: "100%",
        height: "100%",
        minWidth: "100vw",
        minHeight: "100vh",
        transition: "background-color 400ms",
      }}
    >
      <Navbar />
      <Flex
        style={{
          padding: "15px 25px",
          width: "100%",
          minWidth: "100vw",
          height: "100%",
        }}
      >
        {children}
      </Flex>
    </Stack>
  );
}

export default MainLayout;
