import {
  Stack,
  TextInput,
  Flex,
  Chip,
  Title,
  ActionIcon,
  Menu,
  rem,
  Grid,
  Pagination,
} from "@mantine/core";
import {
  IconAdjustments,
  IconGridDots,
  IconList,
  IconSearch,
} from "@tabler/icons-react";
import { useState } from "react";
import { projectData } from "./data";
import { ProjectCard } from "./components";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const tags = ["test", "test1", "test2", "test3"];
const viewTypes = [
  {
    name: "Grid",
    value: "grid",
    icon: <IconGridDots style={{ width: rem(14), height: rem(14) }} />,
  },
  {
    name: "List",
    value: "list",
    icon: <IconList style={{ width: rem(14), height: rem(14) }} />,
  },
];

function ProjectView() {
  const { width } = useWindowDimensions();
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [viewType, setViewType] = useState("grid");
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Stack style={{ width: "100%" }} align="center">
      <Title>Projects</Title>
      <Flex gap={10} align={"center"}>
        <TextInput
          placeholder="Search"
          style={{ width: "400px" }}
          leftSection={<IconSearch />}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
        />
        <Menu>
          <Menu.Target>
            <ActionIcon>
              <IconAdjustments style={{ width: "20px" }} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            {viewTypes.map((viewType, index) => {
              return (
                <Menu.Item
                  key={index}
                  leftSection={viewType.icon}
                  onClick={() => setViewType(viewType.value)}
                >
                  {viewType.name}
                </Menu.Item>
              );
            })}
          </Menu.Dropdown>
        </Menu>
      </Flex>
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
      {viewType === "grid" && (
        <Grid style={{ width: width < 1024 ? "80%" : "60%" }} gutter={"lg"}>
          {projectData?.map((project, index) => {
            return (
              <Grid.Col key={index} span={{ sm: 3, lg: 3 }}>
                <ProjectCard project={project} />
              </Grid.Col>
            );
          })}
        </Grid>
      )}
      <Pagination
        total={0}
        value={page}
        onChange={(page) => setPage(page)}
        style={{ marginTop: "15px" }}
      />
    </Stack>
  );
}

export default ProjectView;
