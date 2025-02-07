"use client";

import { Box, Card, Text, Image, GridItem } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

import { movies, tvSeries } from "../assets/data/Data";
import { useRouter } from "next/navigation";

interface CategoryProps {
  title: string;
}

export default function LSecCard({ title }: CategoryProps) {
  const displayedMovies =
    title === "All Movies"
      ? movies
      : title === "TV Series"
      ? tvSeries
      : movies.slice(0, 4);

  const router = useRouter();

  const handleClick = (movie: any) => {
    const query = new URLSearchParams({
      id: movie.id,
      title: movie.title,
      shortDescription: movie.shortDescription,
      detailedDescription: movie.detailedDescription,
      genre: movie.genre,
      category: movie.category,
      imdbRating: movie.imdbRating,
      imageUrl: movie.imageUrl,
      youtubeLink: movie.ytUrl,
      casting: movie.casting,
      additionalImages: movie.additionalImages,
    }).toString();
    router.push(`/play?${query}`);
  };

  return (
    <Box>
      <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
        {title}
      </Text>

      <Box
        display={{ base: "flex", md: "grid" }}
        gap={5}
        flexWrap={{ base: "nowrap", md: "wrap" }}
        width={"100%"}
        overflowX={{ base: "auto", md: "hidden" }}
        gridTemplateColumns={{ md: "repeat(auto-fill, minmax(300px, 1fr))" }}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        {displayedMovies.map((movie) => (
          <Box key={movie.id} as={GridItem}>
            <Card.Root
              height={"250px"}
              key={movie.id}
              width={{ base: "250px", md: "80%", lg: "100%" }}
              bg={"gray.800"}
              borderRadius={"xl"}
              mt={5}
              p={5}
              onClick={() => handleClick(movie)}
            >
              <Box height="150px" overflow="hidden" borderRadius="md">
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </Box>
              <Card.Body>
                <Text fontSize={"xl"} fontWeight={"bold"} color={"white"}>
                  {movie.title}
                </Text>
                <Text fontSize={"md"} color={"white"}>
                  {movie.shortDescription}
                </Text>
              </Card.Body>
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg="rgba(0, 0, 0, 0.5)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                opacity="0"
                transition="opacity 0.3s"
                _hover={{ opacity: 1, cursor: "pointer" }}
              >
                <FaPlay color="white" size="3em" />
              </Box>
            </Card.Root>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
