import { Box, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

type CustomHStackProps = {
  children: React.ReactNode;
};

const CustomHStack = ({ children }: CustomHStackProps) => (
  <HStack
    my={4}
    _hover={{
      cursor: "pointer",
      color: "red.500",
    }}
  >
    {children}
  </HStack>
);

export default function Profile() {
  return (
    <Box bg="#335" p={4} borderRadius={10} zIndex={100}>
      <HStack mb={5} pb={5} borderBottom={"1px solid #fff"}>
        <Box
          borderRadius={50}
          overflow="hidden"
          width={30}
          height={30}
          _hover={{ cursor: "pointer" }}
          mt={2}
        >
          <Image
            src="https://assets-global.website-files.com/6041fe62768b97d77f78b61d/64505350ae2ee1be7192d1d8_nextjs.svg"
            alt="Profile Image"
            width={30}
            height={30}
            objectFit="cover"
          />
        </Box>
        <Text mt={2} fontSize={"md"}>
          John Smith
        </Text>
      </HStack>

      <CustomHStack>
        <Text mt={2} fontSize={"md"}>
          View Account
        </Text>
      </CustomHStack>

      <CustomHStack>
        <Link href={"/settings"}>
          <Text mt={2} fontSize={"md"}>
            Settings
          </Text>
        </Link>
      </CustomHStack>

      <CustomHStack>
        <Text mt={2} fontSize={"md"}>
          Sign Out
        </Text>
      </CustomHStack>
    </Box>
  );
}
