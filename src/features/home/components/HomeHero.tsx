import {
  Avatar,
  Button,
  Flex,
  Popover,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { Profile } from "../../../assets/images";

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

function HomeHero() {
  return (
    <Stack
      justify="center"
      align="center"
      style={{ width: "100%", height: "600px" }}
    >
      <Avatar src={Profile} alt="Profile" size={"xl"} />
      <Text>Hi, I am Khosoo</Text>
      <Text
        style={{
          minWidth: "300px",
          width: "40%",
          textAlign: "center",
          fontSize: "2rem",
          background: "-webkit-linear-gradient(left, #fff, #8c8c8c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        I research obscure programs and provide full-stack solutions based on
        them.
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
                <Tooltip label={method.tooltip} position="bottom">
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
