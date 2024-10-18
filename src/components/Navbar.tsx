import { Avatar, Button, Flex, useMantineColorScheme } from "@mantine/core";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Profile } from "../assets/images";

const links = [
  {
    label: "Home",
    href: "/home",
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
  const { colorScheme, setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  return (
    <Flex
      style={{ height: "50px", width: "100%", padding: "15px" }}
      align={"center"}
      justify={"space-between"}
    >
      <Avatar src={Profile} alt="Profile" radius={"xl"} />
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
      </motion.div>{" "}
    </Flex>
  );
}

export default Navbar;
