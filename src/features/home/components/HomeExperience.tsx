import {
  Button,
  Flex,
  Stack,
  Text,
  Timeline,
  Title,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { experienceData } from "../data";
import { projectData } from "../../project/data";
import ProjectCard from "../../project/components/ProjectCard";

function HomeExperience() {
  const { width } = useWindowDimensions();

  return (
    <Stack style={{ width: "100%" }} align="center">
      <Title
        style={{
          width: width < 596 ? "80%" : "50%",
          minWidth: "300px",
          textAlign: "start",
        }}
      >
        Experience
      </Title>
      <Timeline
        active={2}
        bulletSize={25}
        style={{ width: width < 1024 ? "80%" : "50%", minWidth: "300px" }}
      >
        {experienceData?.map((experience, index) => {
          return (
            <Timeline.Item bullet={experience?.icon} key={index}>
              <Text fw={600} size="lg">
                {experience.title} @{" "}
                <span>
                  <Tooltip
                    label={
                      experience.companyUrl
                        ? experience.companyUrl
                        : experience.company
                    }
                    position="bottom"
                  >
                    <UnstyledButton
                      style={{ color: "#1971C2" }}
                      variant="subtle"
                      onClick={() => {
                        if (experience?.companyUrl) {
                          window.open(experience.companyUrl);
                        }
                      }}
                    >
                      {experience.company}
                    </UnstyledButton>
                  </Tooltip>
                </span>
              </Text>
              <Text style={{ marginBottom: "10px" }} size="md">
                {experience.date}
              </Text>
              <Text>{experience?.blurb}</Text>
              <Flex gap={5} wrap={"wrap"} style={{ marginTop: "10px" }}>
                {experience?.skills?.map((skill, index) => (
                  <Button key={index} size="xs" variant="outline">
                    {skill}
                  </Button>
                ))}
              </Flex>
              <Flex
                style={{ marginTop: "15px" }}
                wrap={"wrap"}
                gap={15}
                justify={width < 1024 ? "center" : "start"}
              >
                {experience?.projects?.map((projectId, index) => {
                  let projectInfoFinal = {};
                  projectData?.map((projectInfo) => {
                    if (projectInfo?.id === projectId) {
                      projectInfoFinal = projectInfo;
                    }
                  });
                  return <ProjectCard key={index} project={projectInfoFinal} />;
                })}
              </Flex>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Stack>
  );
}

export default HomeExperience;
