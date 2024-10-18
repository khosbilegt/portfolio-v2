import { Button, Stack, Text, Timeline, Title, Tooltip } from "@mantine/core";
import {
  IconDeviceGamepad2,
  IconPhoneCall,
  IconSchool,
} from "@tabler/icons-react";

const experiences = [
  {
    title: "Game Developer",
    company: "Digital Solutions LLC",
    companyUrl: "https://www.digitalsolutions.mn/",
    blurb: "",
    icon: <IconDeviceGamepad2 />,
    date: "2021 - 2022",
  },
  {
    title: "Research Assistant",
    company: "National University of Mongolia",
    companyUrl: "https://www.num.edu.mn/",
    icon: <IconSchool />,
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    company: "Unitel LLC",
    companyUrl: "https://www.unitel.mn/",
    icon: <IconPhoneCall />,
    date: "2021 - 2022",
  },
];

function HomeExperience() {
  return (
    <Stack style={{ width: "100%" }} align="center">
      <Title style={{ width: "50%", minWidth: "300px", textAlign: "start" }}>
        Experience
      </Title>
      <Timeline
        active={2}
        bulletSize={25}
        style={{ width: "50%", minWidth: "300px" }}
      >
        {experiences?.map((experience, index) => {
          return (
            <Timeline.Item bullet={experience?.icon} key={index}>
              <Text style={{ marginBottom: "10px" }} fw={600} size="lg">
                {experience.title}
              </Text>
              <Tooltip label={experience.companyUrl} position="bottom">
                <Button
                  variant="outline"
                  onClick={() => window.open(experience.companyUrl)}
                >
                  {experience.company}
                </Button>
              </Tooltip>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Stack>
  );
}

export default HomeExperience;
