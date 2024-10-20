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

const tags = ["test", "test1", "test2", "test3"];
const viewTypes = [
  {
    name: "Grid",
    value: "grid",
    icon: <IconGridDots width={rem(14)} height={rem(14)} />,
  },
  {
    name: "List",
    value: "list",
    icon: <IconList width={rem(14)} height={rem(14)} />,
  },
];

function ProjectListView() {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [viewType, setViewType] = useState("grid");
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Stack w={"100%"} align="center">
      <Title>Projects</Title>
      <Flex gap={10} align={"center"}>
        <TextInput
          placeholder="Search"
          w={"400px"}
          leftSection={<IconSearch />}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
        />
        <Menu>
          <Menu.Target>
            <ActionIcon>
              <IconAdjustments width={"20px"} />
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
        <Grid
          px={25}
          w={{
            lg: "60%",
            sm: "80%",
            xs: "100%",
          }}
          gutter={"lg"}
        >
          {projectData?.map((project, index) => {
            return (
              <Grid.Col key={index} span={{ sm: 3, lg: 3 }}>
                <ProjectCard project={project} />
              </Grid.Col>
            );
          })}
        </Grid>
      )}
      {viewType === "list" && <p></p>}
      <Pagination
        total={0}
        value={page}
        onChange={(page) => setPage(page)}
        mt={"15px"}
      />
    </Stack>
  );
}

export default ProjectListView;
