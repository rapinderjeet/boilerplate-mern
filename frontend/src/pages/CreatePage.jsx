import { useColorModeValue } from "@/components/ui/color-mode";
import { Container, Heading, VStack, Box, Input, Button } from "@chakra-ui/react";
import React from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });

  const handleProduct = () => {
    console.log("clicked", newProduct)
  };

  return (
    <Container>
      <VStack>
        <Heading mb={5} mt={10}>Create a new product</Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.700")} boxShadow={"2xl"} rounded={"lg"} p={6}>
          <VStack>
            <Input
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            ></Input>
            <Input
              placeholder="Price"
              value={newProduct.price}
              type="number"
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            ></Input>

            <Input
              placeholder="Image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            ></Input>
            <Button onClick={handleProduct}>Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
