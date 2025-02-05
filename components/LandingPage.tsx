import { Box, Container } from "@chakra-ui/react";
import LSecCard from "./LSecCard";

export default function LandingPage() {
  return (
    <Container mt={10}>
      <Box pb={5}>
        <LSecCard title="Latest Movies" />
      </Box>
      <Box py={5}>
        {" "}
        <LSecCard title="All Movies" />
      </Box>
      <Box py={5}>
        {" "}
        <LSecCard title="TV Series" />
      </Box>
    </Container>
  );
}
