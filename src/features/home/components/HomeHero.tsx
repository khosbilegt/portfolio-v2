import {
  Button,
  Flex,
  Popover,
  Stack,
  Text,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import "./Avatar.css";

const hiringMethods = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/khosbilegt-bilegsaikhan-82929424b/",
    tooltip: "https://www.linkedin.com/in/khosbilegt-bilegsaikhan-82929424b/",
  },
  {
    label: "Mail",
    url: "mailto:khosbilegt.b@gmail.com",
    tooltip: "khosbilegt.b@gmail.com",
  },
];

const heroText =
  "I research obscure technologies and provide full-stack solutions based on them.";

function HomeHero() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack
      justify="center"
      align="center"
      style={{ width: "100%", height: "700px" }}
    >
      <div className="avatar avatar-x-large">
        <img
          src={"https://khosbilegt.dev/file/profile.png"}
          alt="Usuário"
          className="avatar-image"
        />
        <img
          src={"https://khosbilegt.dev/file/avatar_outline.png"}
          alt="Moldura"
          className="avatar-frame anim-spin"
        />
      </div>
      <Text
        style={{
          marginTop: "15px",
          minWidth: "300px",
          width: "40%",
          textAlign: "center",
          fontSize: "2rem",
        }}
        variant="gradient"
        gradient={{
          from: colorScheme === "dark" ? "#fff" : "#8c8c8c",
          to: colorScheme === "dark" ? "#8c8c8c" : "#000",
          deg: 90,
        }}
      >
        {heroText}
      </Text>
      <Flex gap={10}>
        <Popover>
          <Popover.Target>
            <Button>Hire Me</Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text>Please choose a method of contact: </Text>
            <Flex gap={10} style={{ marginTop: "10px" }} justify={"center"}>
              {hiringMethods.map((method, index) => (
                <Tooltip label={method.tooltip} position="bottom" key={index}>
                  <Button
                    key={index}
                    onClick={() => window.open(method.url, "_blank")}
                  >
                    {method.label}
                  </Button>
                </Tooltip>
              ))}
            </Flex>
          </Popover.Dropdown>
        </Popover>
        <Button variant="outline">Download CV</Button>
      </Flex>
    </Stack>
  );
}

export default HomeHero;
