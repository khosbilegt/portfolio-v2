import { Stack } from "@mantine/core";
import { Navbar } from "../components";

function MainLayout() {
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
    </Stack>
  );
}

export default MainLayout;
