import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "./components/ui/color-mode";
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("#FDFAF6", "#205781")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
        <Toaster />
      </Box>
    </>
  );
}

export default App;
