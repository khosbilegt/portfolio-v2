import { Button, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Stack
      style={{ width: "100%", height: "80vh" }}
      justify="center"
      align="center"
    >
      <Text style={{ fontSize: "50px" }}>404</Text>
      <Text size="xl" style={{ marginBottom: "15px" }}>
        Page not found
      </Text>
      <Button variant="outline" onClick={() => navigate("/")}>
        Home
      </Button>
    </Stack>
  );
}

export default NotFound;
