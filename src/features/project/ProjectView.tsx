import { Stack } from "@mantine/core";
import { useParams } from "react-router-dom";

function ProjectView() {
  const { projectId } = useParams();

  return (
    <Stack>
      <p>{projectId}</p>
    </Stack>
  );
}

export default ProjectView;
