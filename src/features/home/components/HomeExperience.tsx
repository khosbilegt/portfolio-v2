import {
  Button,
  Flex,
  Grid,
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
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "../../project/components";

function HomeExperience() {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  return (
    <Stack style={{ width: "100%" }} align="center">
      <Title
        style={{
          width: width < 1024 ? "80%" : "60%",
          textAlign: "start",
        }}
      >
        Experience
      </Title>
      <Timeline
        active={2}
        bulletSize={25}
        style={{ width: width < 1024 ? "80%" : "60%", minWidth: "300px" }}
      >
        {experienceData?.map((experience, index) => {
          return (
            <Timeline.Item bullet={experience?.icon} key={index}>
              <Stack align="center">
                <Text
                  fw={600}
                  size="lg"
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                >
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
                <Text
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                  size="md"
                >
                  {experience.date}
                </Text>
                <Text
                  style={{
                    width: "100%",
                    textAlign: "start",
                  }}
                >
                  {experience?.blurb}
                </Text>
                <Flex gap={5} wrap={"wrap"} style={{ marginTop: "10px" }}>
                  {experience?.skills?.map((skill, index) => (
                    <Button
                      key={index}
                      size="xs"
                      variant="outline"
                      onClick={() =>
                        navigate(
                          `/projects?skills=${skill
                            .toLocaleLowerCase()
                            .replace(" ", "_")}`
                        )
                      }
                    >
                      {skill}
                    </Button>
                  ))}
                </Flex>
                <Grid
                  style={{
                    marginTop: "15px",
                    width: width < 596 ? "80%" : "100%",
                  }}
                  gutter={"lg"}
                >
                  {experience?.projects?.map((projectId, index) => {
                    let projectInfoFinal = {};
                    projectData?.map((projectInfo) => {
                      if (projectInfo?.id === projectId) {
                        projectInfoFinal = projectInfo;
                      }
                    });
                    return (
                      <Grid.Col key={index} span={{ sm: 6, md: 4, lg: 3 }}>
                        <ProjectCard key={index} project={projectInfoFinal} />
                      </Grid.Col>
                    );
                  })}
                </Grid>
              </Stack>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Stack>
  );
}

export default HomeExperience;
