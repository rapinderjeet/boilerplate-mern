import ProductCard from "@/components/ProductCard";
import { useProductStore } from "@/store/product";
import { Container, VStack, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import { React, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container py={12}>
      <VStack>
        <Heading mb={10}>Products</Heading>

        <SimpleGrid columns={4} gap="40px">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
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
