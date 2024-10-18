import { Image, Stack, Text } from "@mantine/core";

function ProjectCard({ project }: { project: any }) {
  return (
    <Stack align={"center"}>
      <Text>{project?.name}</Text>
      <Image src={project?.image} fit="contain" style={{ height: "200px" }} />
      <Text>{project?.date}</Text>
    </Stack>
  );
}

export default ProjectCard;
