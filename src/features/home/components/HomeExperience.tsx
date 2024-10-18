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
    icon: <IconDeviceGamepad2 />,
    date: "Jun 2022 - Nov 2022",
    skills: ["UE4", "C++", "Game Dev", "Algorithm"],
    blurb:
      "My professional career began with an internship at Digital Solutions LLC, a start-up based on Web3.0 (Metaverse & VR), where I worked as a game developer. I was responsible for developing custom features that Unreal Engine 4 didn't support natively in C++.",
  },
  {
    title: "Research Assistant",
    company: "National University of Mongolia",
    companyUrl: "https://www.num.edu.mn/",
    icon: <IconSchool />,
    date: "Sep 2021 - Jun 2023",
    skills: [
      "UE4",
      "C++",
      "Game Dev",
      "Vulkan API",
      "Algorithm",
      "VR",
      "AR",
      "Kinect",
      "Spring Boot",
      "React",
    ],
    blurb:
      "During my time at the National University of Mongolia, I worked as a research assistant in the Computer Graphics Research Laboratory, leading a team of 5 students in multiple competitions, leveraging the potential of VR, AR & Motion Controllers.",
  },
  {
    title: "Full-Stack Developer",
    company: "Unitel LLC",
    companyUrl: "https://www.unitel.mn/",
    icon: <IconPhoneCall />,
    date: "Jun 2023 - Present",
    skills: [
      "Java",
      "Quarkus",
      "React",
      "Antd",
      "Mantine",
      "Diameter Protocol",
      "Asterisk PBX",
      "Redis",
      "Kafka",
      "RabbitMQ",
      "Prometheus",
      "Grafana",
      "Kubernetes",
      "Linux",
      "Sysadmin",
    ],
    blurb:
      "Shortly after my graduation, I was offered the position of Back-End Developer at the leading telecommunication provider in Mongolia and have shortly transitioned to a Full-Stack Developer, taking up tasks that required extensive research and diving into the world of documentation.",
  },
  {
    title: "Full-Stack Developer",
    company: "Your Company",
    date: "Present - Future",
    blurb: "I am looking for new opportunities to grow and learn.",
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
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Stack>
  );
}

export default HomeExperience;
