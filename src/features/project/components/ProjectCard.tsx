import { Image, Stack, Text } from "@mantine/core";
import { useState } from "react";

function ProjectCard({ project }: { project: any }) {
  const [isHovered, setHovered] = useState(false);

  return (
    <Stack
      style={{ width: "300px", height: "400px" }}
      align={"center"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={project?.image}
        fit="contain"
        style={{
          height: "200px",
          transition: "200ms",
          transform: isHovered ? "translate(0, -5px)" : "",
        }}
      />
      <Text td={isHovered ? "underline" : ""}>{project?.name}</Text>
      <Text style={{ width: "300px" }}>{project?.description}</Text>
    </Stack>
  );
}

export default ProjectCard;
