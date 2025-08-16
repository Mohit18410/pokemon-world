import { Box, VStack, HStack } from "@Library/index";

export const Header = () => {
  return (
    <VStack border="1px solid red" bg="primaryDeep">
      <Box></Box>
      <HStack>
        <Box>Home</Box>
        <Box>Explore PokeWorld</Box>
        <Box>Contact Us</Box>
        <Box>
          Sign
          {/* <FaRegUserCircle
              size={"1.5em"}
            /> */}
        </Box>
      </HStack>
    </VStack>
  );
};
