import { Button, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Stack w={"100%"} h={"80vh"} justify="center" align="center">
      <Text size="50px">404</Text>
      <Text size="xl" mb={"15px"}>
        Page not found
      </Text>
      <Button variant="outline" onClick={() => navigate("/")}>
        Home
      </Button>
    </Stack>
  );
}

export default NotFound;
