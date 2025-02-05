
'use client';

import { Box, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { LuAmpersand } from "react-icons/lu";
import "./modules.css";
import { InputGroup } from "../components/ui/input-group";
import { IoMenu } from "react-icons/io5";

import { LuSearch } from "react-icons/lu";
import Image from "next/image";
import { useContext } from "react";

import { Context } from "../app/context";

export default function Header() {

    const context = useContext(Context);

     if (!context) {
    throw new Error("Header must be used within a ContextProvider");
  }

  const { active, setActive } = context;

   
    

  return (
    <header className="header">

      <HStack>
        <Icon mr={6} fontSize={30} _hover={{ cursor: "pointer" }} onClick={() => setActive(!active)}>
            <IoMenu />
        </Icon>

        <Icon bgColor={"red"} borderRadius={20} p={2} fontSize={30}>
          <LuAmpersand />
        </Icon>
        <Text fontSize={"large"}>iFlix</Text>
      </HStack>

      <InputGroup
        startElement={
          <Icon >
            <LuSearch />
          </Icon>
        }
        width={'40%'}
      >
        <Input
          placeholder="Search"
          borderRadius={20}
          _placeholder={{
            color: "gray.400",
          }}
          _focus={{
            borderColor: "gray.400",
          }}
        />
      </InputGroup>

       <Box
        borderRadius={50}
        overflow="hidden"    
        width={30}
        height={30}
        _hover={{
            cursor: "pointer",
        }}
       
      >
        <Image
          src='https://assets-global.website-files.com/6041fe62768b97d77f78b61d/64505350ae2ee1be7192d1d8_nextjs.svg'
          alt="Profile Image"
          width={30}           
          height={30}         
          objectFit="cover" 
        />
      </Box>

        

    </header>
  );
}
