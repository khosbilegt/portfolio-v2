import { Stack, TextInput, Flex, Chip, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { projectData } from "./data";
import { ProjectCard } from "./components";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const tags = ["test", "test1", "test2", "test3"];

function ProjectView() {
  const { width } = useWindowDimensions();
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Stack style={{ width: "100%" }} align="center">
      <Title>Projects</Title>
      <TextInput
        placeholder="Search"
        style={{ width: "400px" }}
        leftSection={<IconSearch />}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
      />
      <Flex gap={5}>
        {tags?.map((tag, index) => {
          return (
            <Chip
              key={index}
              onChange={() => {
                if (activeTags.includes(tag)) {
                  setActiveTags(
                    activeTags.filter((activeTag) => activeTag !== tag)
                  );
                } else {
                  setActiveTags([...activeTags, tag]);
                }
              }}
            >
              {tag}
            </Chip>
          );
        })}
      </Flex>
      <Flex
        gap={15}
        wrap={"wrap"}
        justify={"center"}
        style={{ width: width < 1024 ? "80%" : "60%" }}
      >
        {projectData?.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </Flex>
    </Stack>
  );
}

export default ProjectView;
