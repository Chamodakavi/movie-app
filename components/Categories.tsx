import { Box, List, ListItem } from "@chakra-ui/react";

export default function Categories() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      p={2}
    >
      <List.Root
        display={"flex"}
        flexDirection={"row"}
        spaceX={5}
        listStyle={"none"}
        fontSize={"lg"}
        flexGrow={1}
      >
        <ListItem>All</ListItem>
        <ListItem>Sinhala</ListItem>
        <ListItem>Tamil</ListItem>
        <ListItem>English</ListItem>
        <ListItem>Malayalam</ListItem>
        <ListItem>Action</ListItem>
        <ListItem>Adventure</ListItem>
        <ListItem>Horror</ListItem>
        <ListItem>Comedy</ListItem>
        <ListItem>Anime</ListItem>
      </List.Root>
    </Box>
  );
}
