import { Box } from "@chakra-ui/react";
import { useRoutes } from "react-router-dom";

export const RouteContainer = () => {
  return useRoutes([
    {
      path: "",
      element: <Box>Home Page</Box>,
    },
  ]);
};
