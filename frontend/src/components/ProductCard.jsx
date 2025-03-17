import {
  Heading,
  HStack,
  IconButton,
  Image,
  Box,
  Text,
  Dialog,
  Button,
  Portal,
  CloseButton,
  VStack,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LuPencil, LuTrash } from "react-icons/lu";
import { useColorModeValue } from "./ui/color-mode";
import { useProductStore } from "@/store/product";
import { toaster } from "@/components/ui/toaster";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bgColor = useColorModeValue("white", "gray.700");
  const [open, setOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const { deleteProduct, updateProduct } = useProductStore();
  const handleDeleteProduct = async (productId) => {
    const { success, messsage } = await deleteProduct(productId);
    if (success) {
      toaster.create({
        title: "Product created",
        description: messsage,
        type: "success",
      });
    } else {
      toaster.create({
        title: "Error",
        description: messsage,
        type: "error",
      });
    }
  };

  const handleUpdateProduct = async (productId) => {
    const { success, message } = await updateProduct(updatedProduct);
    if (success) {
      toaster.create({
        title: "Product updated",
        description: message,
        type: "success",
      });
      setOpen(false);
    } else {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
      });
    }
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="lg"
      rounded="lg"
      transition="all 0.25s"
      _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
      bg={bgColor}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit={"cover"}
      ></Image>

      <Box p="6">
        <Heading size="md">{product.name}</Heading>

        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor}>
          ${product.price}
        </Text>

        <HStack gap={4} mt={4}>
          <IconButton colorPalette="blue" onClick={() => setOpen(true)}>
            <LuPencil />
          </IconButton>
          <IconButton
            colorPalette="red"
            onClick={() => {
              handleDeleteProduct(product._id);
            }}
          >
            <LuTrash />
          </IconButton>
        </HStack>
      </Box>

      <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Dialog Title</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <VStack>
                  <Input
                    placeholder="Name"
                    value={updatedProduct.name}
                    onChange={(e) =>
                      setUpdatedProduct({ ...product, name: e.target.value })
                    }
                  ></Input>
                  <Input
                    placeholder="Price"
                    value={updatedProduct.price}
                    type="number"
                    onChange={(e) =>
                      setUpdatedProduct({ ...product, price: e.target.value })
                    }
                  ></Input>

                  <Input
                    placeholder="Image"
                    value={updatedProduct.image}
                    onChange={(e) =>
                      setUpdatedProduct({ ...product, image: e.target.value })
                    }
                  ></Input>
                </VStack>
              </Dialog.Body>
              <Dialog.Footer>
                <Button
                  onClick={() => {
                    handleUpdateProduct(product._id);
                  }}
                >
                  Update
                </Button>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );
};

export default ProductCard;
