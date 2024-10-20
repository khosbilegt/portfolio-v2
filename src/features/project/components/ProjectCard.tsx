import { Flex, Image, Stack, Text, useMantineColorScheme } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project }: { project: any }) {
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const [isHovered, setHovered] = useState(false);

  return (
    <Stack
      style={{ width: "100%", height: "100%" }}
      align={"center"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/projects/${project?.id}`)}
    >
      <Flex
        h={"200px"}
        style={{
          transition: "200ms",
          transform: isHovered ? "translate(0, -5px)" : "",
        }}
      >
        <Image
          src={project?.image}
          fit="cover"
          style={{
            width: "100%",
            height: "200px",
            filter:
              project?.imageInverted && colorScheme === "light"
                ? "invert(100%)"
                : "",
          }}
        />
      </Flex>
      <Text td={isHovered ? "underline" : ""} size="lg" fw={500}>
        {project?.name}
      </Text>
      <Text>{project?.description}</Text>
    </Stack>
  );
}

export default ProjectCard;
