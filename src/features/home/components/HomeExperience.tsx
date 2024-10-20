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
import { experienceData } from "../data";
import { projectData } from "../../project/data";
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "../../project/components";
import { Carousel } from "@mantine/carousel";

function HomeExperience() {
  const navigate = useNavigate();

  return (
    <Stack w={"100%"} align="center">
      <Title
        w={{ xs: "80%", sm: "80%", md: "60%", lg: "40%" }}
        px={50}
        ta={"start"}
      >
        Experience
      </Title>
      <Timeline
        active={2}
        bulletSize={25}
        px={50}
        w={{ xs: "80%", sm: "80%", md: "60%", lg: "40%" }}
      >
        {experienceData?.map((experience, index) => {
          return (
            <Timeline.Item bullet={experience?.icon} key={index}>
              <Stack align="center">
                <Text fw={600} size="lg" w={"100%"} ta={"start"}>
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
                        color="#1971C2"
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
                <Text w={"100%"} ta={"start"} size="md">
                  {experience.date}
                </Text>
                <Text w={"100%"} ta={"start"}>
                  {experience?.blurb}
                </Text>
                <Flex gap={5} wrap={"wrap"} mt={"10px"}>
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
                {experience?.projects && experience?.projects?.length > 0 && (
                  <Carousel
                    w={{ sm: "80%", md: "80%", lg: "60%" }}
                    height={"400px"}
                    loop
                    withIndicators
                  >
                    {experience?.projects?.map((projectId, index) => {
                      let projectInfoFinal = {};
                      projectData?.map((projectInfo) => {
                        if (projectInfo?.id === projectId) {
                          projectInfoFinal = projectInfo;
                        }
                      });
                      return (
                        <Carousel.Slide key={index}>
                          <ProjectCard project={projectInfoFinal} />
                        </Carousel.Slide>
                      );
                    })}
                  </Carousel>
                )}
              </Stack>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Stack>
  );
}

export default HomeExperience;
