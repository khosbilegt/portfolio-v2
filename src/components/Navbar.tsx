import {
  Burger,
  Button,
  Drawer,
  Flex,
  Image,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Favicon } from "../assets/images";
import useWindowDimensions from "../hooks/useWindowDimensions";

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
  const [opened, { close, toggle }] = useDisclosure(false);
  const { colorScheme, setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  if (width < 768) {
    return (
      <Flex p={"15px"}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size={"sm"} />
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
                p={"0 15px"}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
          <Flex w={"100%"} mt={"15px"} justify={"end"}>
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
      h={"50px"}
      w={"100%"}
      p={"15px"}
      maw={"100vw"}
      align={"center"}
      justify={"space-between"}
    >
      <Button variant="subtle" onClick={() => navigate("/")}>
        <Image
          src={Favicon}
          style={{
            filter: colorScheme === "dark" ? "invert(30%)" : "",
            zIndex: width > 768 ? 1 : 0,
            opacity: width > 768 ? 1 : 0,
          }}
        />
      </Button>
      <Flex align={"center"}>
        {links.map((link, index) => (
          <Button
            key={index}
            onClick={() => navigate(link.href)}
            variant="subtle"
            size="md"
          >
            {link.label}
          </Button>
        ))}
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
    </Flex>
  );
}

export default Navbar;
