"use client";

import { Box, Grid, GridItem, Text, VStack, HStack, Badge } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function PlayPage() {
  const searchParams = useSearchParams();

  // const id = searchParams.get("id");
  const title = searchParams.get("title");
  const shortDescription = searchParams.get("shortDescription");
  const detailedDescription = searchParams.get("detailedDescription");
  const genre = searchParams.getAll("genre");
  const category = searchParams.get("category");
  const imdbRating = searchParams.get("imdbRating");
  const imageUrl = searchParams.get("imageUrl");
  const casting = searchParams.getAll("casting");
  // const additionalImages = searchParams.getAll("additionalImages");

  return (
    <Box
      padding="6"
      height="100vh"
      width="100%"
      backgroundImage={`url(${imageUrl})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      position="relative"
      pt={20}
    >
      {/* Dark Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.6)"
        backdropFilter="blur(10px)"
      />

      {/* Content */}
      <Box position="relative" zIndex={2} color="white" maxW="1200px" mx="auto">
        <Grid 
          templateColumns={{ base: "1fr", md: "1fr 1fr" }} 
          gap={10} 
          alignItems="center"
        >
          {/* Movie Info Section */}
          <GridItem>
            <VStack align="start" gap={4}>
              <Text fontSize="4xl" fontWeight="bold">{title}</Text>
              <Badge colorScheme="red" fontSize="lg">{category}</Badge>
              <Text fontSize="xl">{shortDescription}</Text>
              
              {/* Genre Badges */}
              <HStack gap={2}>
                {genre.map((g, index) => (
                  <Badge key={index} colorScheme="blue" px={3} py={1} borderRadius="full">
                    {g}
                  </Badge>
                ))}
              </HStack>

              {/* IMDb Rating */}
              <Text fontSize="lg">
                <strong>IMDb:</strong> ⭐ {imdbRating}/10
              </Text>

              {/* Casting */}
              <Text fontSize="lg">
                <strong>Starring:</strong> {casting.join(", ")}
              </Text>

              {/* Detailed Description */}
              <Text fontSize="md" opacity={0.9}>{detailedDescription}</Text>
            </VStack>
          </GridItem>

          {/* Main Movie Image */}
          <GridItem>
            <Image 
              src={imageUrl as string} 
              alt={title as string} 
              width={500} 
              height={300} 
              objectFit="cover"
              style={{ borderRadius: "15px" }}
            />
          </GridItem>
        </Grid>

        {/* Additional Images */}
        {/* {additionalImages.length > 0 && (
          <VStack mt={10} gap={5} align="start">
            <Text fontSize="2xl" fontWeight="bold">More Images</Text>
            <HStack gap={4} overflowX="auto">
              {additionalImages.map((img, index) => (
                <Image 
                  key={index} 
                  src={img} 
                  alt={`Additional Image ${index + 1}`} 
                  width={200} 
                  height={120} 
                  objectFit="cover"
                  style={{ borderRadius: "10px" }}
                />
              ))}
            </HStack>
          </VStack>
        )} */}
      </Box>
    </Box>
  );
}
