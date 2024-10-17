import { Button, Drawer, Flex, Group, Tree, useTree } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { sidebarData } from "./sidebarData";
import { useState } from "react";

function HomeSidebar({
  isHamburgRequired,
  isSiderOpen,
  closeSider,
}: {
  isHamburgRequired: boolean;
  isSiderOpen: boolean;
  closeSider: any;
}) {
  const [hoveredItem, setHoveredItem] = useState("");
  const tree = useTree();

  const setSelected = (node: any) => {
    if (node?.children?.length > 0) {
      if (node?.children[0].children?.length > 0) {
        tree.select(node?.children[0].children[0].value);
        closeSider();
      } else {
        tree.select(node?.children[0].value);
        closeSider();
      }
    } else {
      tree.select(node?.value);
      closeSider();
    }
  };

  const renderTree = () => {
    return (
      <Tree
        style={{
          width: "100%",
          height: "100%",
        }}
        tree={tree}
        data={sidebarData}
        renderNode={({
          node,
          expanded,
          hasChildren,
          elementProps,
          selected,
        }) => (
          <Group
            gap={5}
            {...elementProps}
            style={{
              background: "transparent",
            }}
          >
            <Button
              onMouseEnter={() => setHoveredItem(node?.value)}
              onMouseLeave={() => setHoveredItem("")}
              style={{
                width: "100%",
                background: "transparent",
                fontFamily: "Roboto, sans-serif",
                fontWeight: selected ? "500" : "400",
                color:
                  hoveredItem === node?.value
                    ? "#4F67F0"
                    : selected
                    ? "#4871BC"
                    : "#B4B7C1",
              }}
              justify="space-between"
              onClick={() => setSelected(node)}
              rightSection={
                hasChildren ? (
                  <IconChevronDown
                    size={18}
                    style={{
                      transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                ) : (
                  <></>
                )
              }
            >
              {node?.label}
            </Button>
          </Group>
        )}
      />
    );
  };

  if (isHamburgRequired) {
    return (
      <Drawer
        title="Navigation"
        opened={isSiderOpen}
        onClose={closeSider}
        styles={{
          title: {
            color: "#B4B7C1",
          },
          header: {
            background: "#1E2129",
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)",
          },
          body: {
            background: "#1E2129",
            padding: "20px",
            height: "100%",
          },
        }}
      >
        {renderTree()}
      </Drawer>
    );
  }

  return (
    <Flex
      style={{
        width: "30%",
        maxWidth: "400px",
        minWidth: "300px",
      }}
    >
      {renderTree()}
    </Flex>
  );
}

export default HomeSidebar;
