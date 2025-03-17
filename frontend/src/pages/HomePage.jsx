import ProductCard from "@/components/ProductCard";
import { productStore } from "@/store/product";
import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { React, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { products, fetchProducts } = productStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container py={12}>
      <VStack>
        <Text>Products List</Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text>
            No product found!{" "}
            <Link to="/create">
              <Text as="span" color="blue.500">
                Create a new product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
