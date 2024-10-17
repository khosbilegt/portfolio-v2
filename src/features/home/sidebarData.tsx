import { TreeNodeData } from "@mantine/core";

export const sidebarData: TreeNodeData[] = [
  {
    label: "About me",
    value: "about",
    children: [
      {
        label: "Introduction",
        value: "intro",
      },
      {
        label: "Coding",
        value: "coding",
      },
      {
        label: "Hobbies",
        value: "hobbies",
      },
    ],
  },
  {
    label: "Experience",
    value: "experience",
    children: [
      {
        label: "Digital Solutions LLC",
        value: "digital_solutions",
        children: [
          { label: "index.d.ts", value: "node_modules/react/index.d.ts" },
          { label: "package.json", value: "node_modules/react/package.json" },
        ],
      },
      {
        label: "National University of Mongolia",
        value: "num",
        children: [
          { label: "index.d.ts", value: "node_modules/react/index.d.ts" },
          { label: "package.json", value: "node_modules/react/package.json" },
        ],
      },
      {
        label: "Unitel LLC",
        value: "unitel",
        children: [
          { label: "index.d.ts", value: "node_modules/react/index.d.ts" },
          { label: "package.json", value: "node_modules/react/package.json" },
        ],
      },
    ],
  },
  {
    label: "Projects",
    value: "projects",
  },
  {
    label: "Contact",
    value: "contact",
  },
];
