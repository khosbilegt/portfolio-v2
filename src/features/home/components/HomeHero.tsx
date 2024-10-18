import {
  Button,
  Flex,
  Popover,
  Stack,
  Text,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { Profile } from "../../../assets/images";
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

const heroIntro = "Hi, I am Khosoo";
const heroText =
  "I research obscure technologies and provide full-stack solutions based on them.";

function HomeHero() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack
      justify="center"
      align="center"
      style={{ width: "100%", height: "600px" }}
    >
      <div className="avatar avatar-x-large">
        <img src={Profile} alt="Usuário" className="avatar-image" />
        <img
          src="https://i.imgur.com/0aDdQyR.png"
          alt="Moldura"
          className="avatar-frame anim-spin"
        />
      </div>
      <Text size="lg" c={"dimmed"} style={{ marginTop: "15px" }}>
        {heroIntro}
      </Text>
      {colorScheme === "dark" && (
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
          {heroText}
        </Text>
      )}
      {colorScheme === "light" && (
        <Text
          style={{
            minWidth: "300px",
            width: "40%",
            textAlign: "center",
            fontSize: "2rem",
            background: "-webkit-linear-gradient(left, #000, #8c8c8c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {heroText}
        </Text>
      )}

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
