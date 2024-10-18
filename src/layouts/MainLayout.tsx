import { Flex, Stack } from "@mantine/core";
import { Navbar } from "../components";
import Footer from "../components/Footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      style={{
        width: "100%",
        height: "100%",
        minWidth: "100vw",
        minHeight: "100vh",
        maxWidth: "100vw",
        transition: "background-color 400ms",
      }}
    >
      <Navbar />
      <Flex
        style={{
          padding: "15px 25px",
          width: "100%",
          minWidth: "100vw",
        }}
      >
        {children}
      </Flex>
      <Footer />
    </Stack>
  );
}

export default MainLayout;
