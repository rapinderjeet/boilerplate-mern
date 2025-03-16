import { Container, Text, Flex, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./ui/color-mode";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <Flex
        h="16"
        align={"center"}
        justify={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textAlign={"center"}
        >
          <Link to={"/"}>Home</Link>
        </Text>

        <HStack spacing={2} aligh={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            <Text>{colorMode === "light" ? <LuMoon /> : <LuSun />}</Text>
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
