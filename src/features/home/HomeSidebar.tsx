import { Group, Tree } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { sidebarData } from "./sidebarData";

function HomeSidebar() {
  return (
    <Tree
      data={sidebarData}
      renderNode={({ node, expanded, hasChildren, elementProps }) => (
        <Group gap={5} {...elementProps}>
          <span>{node.label}</span>
          {hasChildren && (
            <IconChevronDown
              size={18}
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          )}
        </Group>
      )}
    />
  );
}

export default HomeSidebar;
