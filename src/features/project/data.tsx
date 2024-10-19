import {
  ClassroomProject,
  GuyukProject,
  PhysicsProject,
  SpacePilotProject,
} from "../../assets/images";

const projectData = [
  {
    id: "guyuk",
    name: "Guyuk Metaverse",
    image: GuyukProject,
    description:
      "Guyuk is Mongolia's 1st Metaverse built on UE4. Its purpose is to provide education through virtual tourism and online communication.",
  },
  {
    id: "physics_simulator",
    name: "Physics Simulator",
    image: PhysicsProject,
    description:
      "Miniature render engine built with C++ & Vulkan API. I coded the engine from scratch and wrote the shaders in GLSL.",
  },
  {
    id: "classroom",
    name: "3D Classroom",
    image: ClassroomProject,
    description:
      "3D Classroom where subjects may be taught more interactively utilizing both built-in assets and those from an user-operated market, built in UE4 and C++.",
  },
  {
    id: "space_pilot",
    name: "Space Pilot",
    image: SpacePilotProject,
    description:
      "A spaceship piloting game with motion controls based on Microsoft Kinect, built in UE4 and C++.",
  },
];

export { projectData };
