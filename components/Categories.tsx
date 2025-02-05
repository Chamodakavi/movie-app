import { Box, List, ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

const StyledListItem = ({ children }: { children: ReactNode }) => (
  <ListItem
    bgColor={"gray.700"}
    p={2}
    borderRadius={8}
    fontSize={"sm"}
    px={3}
    whiteSpace="nowrap" 
    _hover={{
      color: "teal.500",
      cursor: "pointer",
    }}
  >
    {children}
  </ListItem>
);

export default function Categories() {
  return (
    <Box
      width="100%" 
      overflowX="auto" 
      whiteSpace="nowrap"
      display={{ base: "block", md: "flex" }} 
      justifyContent={{base:'none', md: "center" }} 
    >
      <List.Root
        display="flex"
        flexDirection="row"
        gap={4}
        listStyle="none"
        fontSize="md"
        minWidth="max-content" 
      >
        <StyledListItem>All</StyledListItem>
        <StyledListItem>Sinhala</StyledListItem>
        <StyledListItem>Tamil</StyledListItem>
        <StyledListItem>English</StyledListItem>
        <StyledListItem>Malayalam</StyledListItem>
        <StyledListItem>Action</StyledListItem>
        <StyledListItem>Adventure</StyledListItem>
        <StyledListItem>Horror</StyledListItem>
        <StyledListItem>Comedy</StyledListItem>
        <StyledListItem>Anime</StyledListItem>
      </List.Root>
    </Box>
  );
}
