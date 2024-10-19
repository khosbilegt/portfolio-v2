import {
  IconDeviceGamepad2,
  IconPhoneCall,
  IconSchool,
} from "@tabler/icons-react";

const experienceData = [
  {
    title: "Game Developer",
    company: "Digital Solutions LLC",
    companyUrl: "https://www.digitalsolutions.mn/",
    icon: <IconDeviceGamepad2 />,
    date: "Jun 2022 - Nov 2022",
    skills: ["UE4", "C++", "Game Dev", "Algorithm"],
    projects: ["guyuk"],
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
      "GLSL",
      "Algorithm",
      "VR",
      "AR",
      "Kinect",
      "Spring Boot",
      "React",
    ],
    projects: ["physics_simulator", "classroom", "space_pilot"],
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
    projects: [
      "broadband_cdr",
      "customer_validation",
      "jooq_asterisk_generator",
    ],
    blurb:
      "Shortly after my graduation, I was offered the position of Back-End Developer at the leading telecommunication provider in Mongolia and have shortly transitioned to a Full-Stack Developer, taking up tasks that required extensive research and diving into the world of documentation.",
  },
  {
    title: "Full-Stack Developer",
    company: "Your Company",
    date: "Present - Future",
    blurb: "I am always looking for new opportunities to grow and learn.",
  },
];

export { experienceData };
