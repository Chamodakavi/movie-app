import { Box, Icon, List, ListItem, Stack } from "@chakra-ui/react";
import { FaHome, FaFire, FaStar, FaList, FaSignOutAlt } from "react-icons/fa";
import { DrawerContext } from "../app/(home)/context";
import { useContext } from "react";
import "./modules.css";

type StyledListItemProps = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  icon: React.ElementType;
};

const StyledListItem = ({ isActive, onClick, icon }: StyledListItemProps) => (
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
  </ListItem>
);

export default function MiniSideDrawer() {
  const drawerContext = useContext(DrawerContext);
  const activeItem = drawerContext?.activeItem;
  const setActiveItem = drawerContext?.setActiveItem;

  return (
    <Box
      className="mini-side-drawer"
       display="flex"
      flexDirection="column"
      height="100vh"
      overflowY={"auto"}
    >
      <List.Root listStyle={"none"} fontSize={"lg"} flexGrow={1}>

<List.Indicator fontSize={12} color={"gray.400"} mb={3}>
          Feed
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
      </Stack>
    </Box>
  );
}
