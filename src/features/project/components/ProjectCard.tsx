import { Flex, Image, Stack, Text } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project }: { project: any }) {
  const navigate = useNavigate();
  const [isHovered, setHovered] = useState(false);

  return (
    <Stack
      style={{ width: "300px", height: "400px" }}
      align={"center"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/projects/${project?.id}`)}
    >
      <Flex
        style={{
          height: "200px",
          transition: "200ms",
          transform: isHovered ? "translate(0, -5px)" : "",
        }}
      >
        <Image src={project?.image} fit="scale-down" />
      </Flex>

      <Text td={isHovered ? "underline" : ""}>{project?.name}</Text>
      <Text style={{ width: "300px" }}>{project?.description}</Text>
    </Stack>
  );
}

export default ProjectCard;
