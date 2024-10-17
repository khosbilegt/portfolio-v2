import { Button, Flex, Stack, Tabs, Text, Title } from "@mantine/core";

function HomeHero() {
  return (
    <Flex
      style={{
        color: "#B4B7C1",
        width: "100%",
        fontFamily: "Roboto, sans-serif",
      }}
      justify={"space-around"}
    >
      <Stack style={{ width: "20%", minHeight: "60vh" }} justify="center">
        <Text style={{ fontSize: "1.5rem" }}>Hello there,</Text>
        <Title
          style={{ marginTop: "5px", fontSize: "3rem", lineHeight: "1.2" }}
        >
          I'm Khosoo
        </Title>
        <Title style={{ fontSize: "2rem" }}>I wear many hats</Title>
        <Flex
          style={{ width: "100%", marginTop: "15px" }}
          justify={"center"}
          gap={10}
        >
          <Button variant="filled" style={{ color: "#fff" }}>
            Hire Me
          </Button>
          <Button variant="outline">Download CV</Button>
        </Flex>
      </Stack>
      <Stack
        style={{
          width: "40%",
          height: "100%",
          minHeight: "40vh",
          padding: "0 50px",
        }}
      >
        <Tabs defaultValue={"frontend"}>
          <Tabs.List grow>
            <Tabs.Tab value="frontend">Front-End</Tabs.Tab>
            <Tabs.Tab value="backend">Back-End</Tabs.Tab>
            <Tabs.Tab value="sysadmin">Sysadmin</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="frontend">
            <Text>Front-End Content</Text>
          </Tabs.Panel>
          <Tabs.Panel value="backend">
            <Text>Back-End Content</Text>
          </Tabs.Panel>
          <Tabs.Panel value="sysadmin">
            <Text>Sysadmin Content</Text>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Flex>
  );
}

export default HomeHero;
