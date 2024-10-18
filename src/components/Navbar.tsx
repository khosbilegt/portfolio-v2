import {
  Button,
  Drawer,
  Flex,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useDisclosure } from "@mantine/hooks";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Project",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme, setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  if (width < 596) {
    return (
      <Flex style={{ padding: "15px" }}>
        <Button onClick={open}>Test</Button>
        <Drawer
          title="Menu"
          onClose={close}
          opened={opened}
          styles={{
            content: {
              maxWidth: "300px",
            },
          }}
        >
          <Stack>
            {links.map((link, index) => (
              <Button
                key={index}
                onClick={() => {
                  close();
                  navigate(link.href);
                }}
                variant="subtle"
                style={{ padding: "0 15px" }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
          <Flex style={{ width: "100%", marginTop: "15px" }} justify={"end"}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              <Button
                onClick={() =>
                  setColorScheme(colorScheme === "dark" ? "light" : "dark")
                }
                variant="outline"
              >
                {colorScheme === "dark" ? (
                  <IconSunFilled />
                ) : (
                  <IconMoonFilled />
                )}
              </Button>
            </motion.div>
          </Flex>
        </Drawer>
      </Flex>
    );
  }

  return (
    <Flex
      style={{
        height: "50px",
        width: "100%",
        padding: "15px",
        maxWidth: "100vw",
      }}
      align={"center"}
      justify={"space-between"}
    >
      <p></p>
      <Flex>
        {links.map((link, index) => (
          <Button
            key={index}
            onClick={() => navigate(link.href)}
            variant="subtle"
          >
            {link.label}
          </Button>
        ))}
      </Flex>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        <Button
          onClick={() =>
            setColorScheme(colorScheme === "dark" ? "light" : "dark")
          }
          variant="outline"
        >
          {colorScheme === "dark" ? <IconSunFilled /> : <IconMoonFilled />}
        </Button>
      </motion.div>
    </Flex>
  );
}

export default Navbar;
