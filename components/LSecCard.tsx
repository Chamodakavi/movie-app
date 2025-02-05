import { Box, Card, Text, Image, GridItem } from "@chakra-ui/react";

export default function LSecCard() {
 const movies = [
    {
      id: 1,
      title: "Black Panther",
      description: "Doomed Nation",
      imageUrl: "https://th.bing.com/th/id/OIP.Myf1r-XsLHVE_WH58lG-UQHaDt?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      title: "Avengers: Endgame",
      description: "The Final Battle",
      imageUrl: "https://th.bing.com/th/id/OIP.jd30pttsOqt1erUgPpaVdAHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      title: "Spider-Man: No Way Home",
      description: "Multiverse Madness",
      imageUrl: "https://th.bing.com/th/id/R.ae5ea9ac914ade9dd089c382184adf4e?rik=KLshbX9ojweQxg&pid=ImgRaw&r=0",
    },
    {
      id: 4,
      title: "Doctor Strange",
      description: "Mystic Arts",
      imageUrl: "https://th.bing.com/th/id/OIP.5yo9LzjE102mui-CioIgYQHaFF?w=268&h=185&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    },
    {
      id: 5,
      title: "Guardians of the Galaxy",
      description: "Space Adventures",
      imageUrl: "https://th.bing.com/th/id/OIP.whbhQ4JYOIz-WvVS7tIXFAHaEK?rs=1&pid=ImgDetMain",
    },
    // Add more movie objects here
  ];

  return (
    <Box>
      <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
        Latest Movies
      </Text>

     <Box
        display={{ base: "flex", md: "grid" }}
        gap={5}
        flexWrap={{ base: "nowrap", md: "wrap" }}
        width={"100%"}
        overflowX={{ base: "auto", md: "hidden" }}
        gridTemplateColumns={{ md: "repeat(auto-fill, minmax(300px, 1fr))" }}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',  // IE and Edge
          scrollbarWidth: 'none',  // Firefox
        }}
       
      >
        {movies.slice(0, ).map((movie) =>(
          <Box key={movie.id} as={GridItem}>
            <Card.Root
             height={'250px'}
              key={movie.id}
               width={{ base: "250px", md: "80%" , lg: "100%" }}
              bg={"gray.800"}
              borderRadius={"xl"}
              mt={5}
              p={5}
            >
               <Box height="150px" overflow="hidden" borderRadius="md">
                <Image src={movie.imageUrl} alt={movie.title} width="100%" height="100%" objectFit="cover" />
              </Box>
              <Card.Body>
                <Text fontSize={"xl"} fontWeight={"bold"} color={"white"}>
                  {movie.title}
                </Text>
                <Text fontSize={"md"} color={"white"}>
                  {movie.description}
                </Text>
              </Card.Body>
            </Card.Root>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
