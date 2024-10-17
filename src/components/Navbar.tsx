import { Card, Flex, Image, Text, TextInput } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconSearch,
} from "@tabler/icons-react";
import { useState } from "react";
import { Logo } from "../assets/images";

const socialLinks = [
  {
    name: "Github",
    icon: <IconBrandGithub />,
  },
  {
    name: "Instagram",
    icon: <IconBrandInstagram />,
  },
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin />,
  },
];

function Navbar() {
  const [isSearchHovering, setSearchHovering] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(-1);

  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      style={{
        width: "100%",
        height: "50px",
        background: "#4051B5",
        padding: "15px",
      }}
    >
      <Flex align={"center"} gap={10} style={{ color: "#fff" }}>
        <Image src={Logo} style={{ height: "30px" }} />
        <TextInput
          onMouseEnter={() => setSearchHovering(true)}
          onMouseLeave={() => setSearchHovering(false)}
          leftSection={<IconSearch />}
          placeholder="Search..."
          styles={{
            input: {
              background: isSearchHovering ? "#5766BE" : "#2F3C86",
              transition: "400ms",
              border: "none",
              color: "#fff",
            },
          }}
        />
      </Flex>
      <Flex gap={5}>
        {socialLinks.map((link, index) => (
          <Card
            onMouseEnter={() => setSelectedIcon(index)}
            onMouseLeave={() => setSelectedIcon(-1)}
            key={index}
            style={{
              padding: "5px",
              background: "transparent",
              transition: "200ms",
              border: `1px solid ${
                selectedIcon === index ? "#C6CBE9" : "#fff"
              }`,
              color: selectedIcon === index ? "#C6CBE9" : "#fff",
            }}
          >
            {link.icon}
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}

export default Navbar;
