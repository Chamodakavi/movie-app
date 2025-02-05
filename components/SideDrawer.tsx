"use client";

import { Icon, List, ListItem, Stack, Text, Box } from "@chakra-ui/react";
import "./modules.css";
import { useContext } from "react";
import { FaHome, FaFire, FaStar, FaList, FaSignOutAlt } from "react-icons/fa";
import { Context, DrawerContext } from "../app/context";
import MiniSideDrawer from "./MiniSideDrawer";

type StyledListItemProps = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  icon: React.ElementType;
};

const StyledListItem = ({
  children,
  isActive,
  onClick,
  icon,
}: StyledListItemProps) => (
  <ListItem
    fontSize={"md"}
    padding={"12px"}
    ml={-2}
    _hover={{
      background: "red.700",
      cursor: "pointer",
      borderRadius: "20px",
    }}
    background={isActive ? "red.700" : "transparent"}
    borderRadius={isActive ? "20px" : "none"}
    color={isActive ? "white" : "gray.400"}
    onClick={onClick}
  >
    <Icon fontSize={20} mr={3} as={icon} />
    {children}
  </ListItem>
);

export default function SideDrawer() {
  const drawerContext = useContext(DrawerContext);
  const activeItem = drawerContext?.activeItem;
  const setActiveItem = drawerContext?.setActiveItem;

  const context = useContext(Context);
  const active = context?.active;

  return (
    <Box transition="width 0.3s ease-in-out">
      {active ? (
        <Box
          className="side-drawer"
          display="flex"
          flexDirection="column"
          height="100vh"
          overflowY={"auto"}
        >
          <List.Root listStyle={"none"} fontSize={"lg"} flexGrow={1}>
            <List.Indicator fontSize={12} color={"gray.400"} mb={3}>
              News Feed
            </List.Indicator>

            <StyledListItem
              icon={FaHome}
              isActive={activeItem === 0}
              onClick={() => setActiveItem && setActiveItem(0)}
            >
              Browse
            </StyledListItem>

            <StyledListItem
              icon={FaFire}
              isActive={activeItem === 1}
              onClick={() => setActiveItem && setActiveItem(1)}
            >
              Trending
            </StyledListItem>

            <StyledListItem
              icon={FaStar}
              isActive={activeItem === 2}
              onClick={() => setActiveItem && setActiveItem(2)}
            >
              Favourite
            </StyledListItem>

            <StyledListItem
              icon={FaList}
              isActive={activeItem === 3}
              onClick={() => setActiveItem && setActiveItem(3)}
            >
              Playlist
            </StyledListItem>
          </List.Root>

          <Stack
            display={"flex"}
            flexDirection={"row"}
            color={"gray.400"}
            padding={4}
            mb={14}
            _hover={{
              cursor: "pointer",
              backgroundColor: "whiteAlpha.400",
              color: "black",
              borderRadius: "10px",
            }}
            borderTop={"1px solid"}
          >
            <Icon mt={1.5}>
              <FaSignOutAlt />
            </Icon>
            <Text fontSize={"md"}>Logout</Text>
          </Stack>
        </Box>
      ) : (
        <MiniSideDrawer />
        //<div>gg</div>
      )}
    </Box>
  );
}
