import { useColorModeValue } from "@/components/ui/color-mode";
import { productStore } from "@/store/product";
import {
  Container,
  Heading,
  VStack,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { toaster } from "@/components/ui/toaster";

const CreatePage = () => {
  const [product, setProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = productStore();
  const handleCreateProduct = async () => {
    const { success, message } = await createProduct(product);

    if (success) {
      toaster.create({
        title: "Product created",
        description: "Product created successfully",
        type: "success",
      });
    } else {
      toaster.create({
        title: "Error",
        description: "Product creation error!",
        type: "error",
      });
    }

    setProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container>
      <VStack>
        <Heading mb={5} mt={10}>
          Create a new product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
        >
          <VStack>
            <Input
              placeholder="Name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            ></Input>
            <Input
              placeholder="Price"
              value={product.price}
              type="number"
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            ></Input>

            <Input
              placeholder="Image"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            ></Input>
            <Button onClick={handleCreateProduct}>Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
