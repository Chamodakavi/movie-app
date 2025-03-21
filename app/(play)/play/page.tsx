"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  Icon,
  Center,
  Spinner,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import "./globals.css";

function PlayPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const title = searchParams.get("title");
  const shortDescription = searchParams.get("shortDescription");
  const detailedDescription = searchParams.get("detailedDescription");
  const genre = searchParams.getAll("genre");
  const category = searchParams.get("category");
  const imdbRating = searchParams.get("imdbRating");
  const imageUrl = searchParams.get("imageUrl");
  const casting = searchParams.getAll("casting");
  const additionalImagesRaw = searchParams.getAll("additionalImages");

  const [ytLink, setYtLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const link = searchParams.get("youtubeLink");
    setYtLink(link ? decodeURIComponent(link) : null);
    setLoading(false);
  }, [searchParams]);

  const additionalImages =
    additionalImagesRaw.length === 1
      ? additionalImagesRaw[0].split(",")
      : additionalImagesRaw;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (additionalImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === additionalImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [additionalImages]);

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
      <Box
        position={"absolute"}
        top={"3.3%"}
        right={"7%"}
        zIndex={999}
        _hover={{
          cursor: "pointer",
          color: "red.700",
        }}
        onClick={() => router.push("/")}
      >
        <Icon fontSize={"2xl"}>
          <FaArrowLeft />
        </Icon>
      </Box>

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.6)"
        backdropFilter="blur(10px)"
      />
      <Box
        position="relative"
        zIndex={2}
        color="white"
        maxW="1200px"
        mx="auto"
        maxHeight="90vh"
        overflowY="auto"
        paddingRight={4}
        mt={-3}
        paddingBottom={50}
      >
        {/* Show loading state until the data is ready */}
        {loading ? (
          <Center height="100vh">
            <Spinner size="xl" />
            <Text fontSize="2xl" color="white" ml={4}>
              Loading...
            </Text>
          </Center>
        ) : (
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={10}
            alignItems="center"
          >
            <GridItem>
              <VStack align="start" gap={4}>
                <Text fontSize="4xl" fontWeight="bold">
                  {title}
                </Text>
                <Badge colorScheme="red" fontSize="lg">
                  {category}
                </Badge>
                <Text fontSize="xl">{shortDescription}</Text>
                <HStack gap={2}>
                  {genre.map((g, index) => (
                    <Badge
                      key={index}
                      colorScheme="blue"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {g}
                    </Badge>
                  ))}
                </HStack>
                <Text fontSize="lg">
                  <strong>IMDb:</strong> ⭐ {imdbRating}/10
                </Text>
                <Text fontSize="lg">
                  <strong>Starring:</strong> {casting.join(", ")}
                </Text>
                <Text fontSize="md" opacity={0.9}>
                  {detailedDescription}
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <Image
                src={additionalImages[currentImageIndex].trim()}
                alt={`Sliding Image ${currentImageIndex + 1}`}
                width={600}
                height={400}
                objectFit="cover"
                style={{
                  borderRadius: "15px",
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
            </GridItem>
          </Grid>
        )}

        {/* This content will also be hidden while loading */}
        {loading ? null : (
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={2}
            alignItems="center"
            mt={20}
          >
            <GridItem bgColor={"red"}>
              <Box position="relative" width="100%">
                {ytLink ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={ytLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <p>No video available</p>
                )}
              </Box>
            </GridItem>
            <GridItem
              display={"flex"}
              justifyContent={"center"}
              my={20}
              pb={20}
            >
              <HStack gap={4}>
                <Button
                  colorScheme="red"
                  size="lg"
                  borderRadius="full"
                  px={6}
                  py={3}
                  fontWeight="bold"
                  _hover={{ bg: "red.600" }}
                >
                  Download
                </Button>
                <Button
                  colorScheme="blue"
                  size="lg"
                  borderRadius="full"
                  px={6}
                  py={3}
                  fontWeight="bold"
                  _hover={{ bg: "blue.600" }}
                >
                  Watch Now
                </Button>
              </HStack>
            </GridItem>
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default function PlayPage() {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <PlayPageContent />
    </Suspense>
  );
}
