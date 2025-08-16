import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primaryDeep: { value: "#001B48" },
        primaryBold: { value: "#02457A" },
        primaryBase: { value: "#018ABE" },
        primaryLight: { value: "#97CADB" },
        primaryPale: { value: "#D6E9EE" },
      },
      fonts: {
        primaryDeep: { value: "#FFFFFF" },
        primaryBold: { value: "#F8FAFC" },
        primaryBase: { value: "#1E293B" },
        primaryLight: { value: "#0F172A" },
        primaryPale: { value: "#020617" },
      },
      borders: {
        primaryDeep: { value: "#1E40AF" },
        primaryBold: { value: "#3B82F6" },
        primaryBase: { value: "#06B6D4" },
        primaryLight: { value: "#0284C7" },
        primaryPale: { value: "#0369A1" },
      },
    },
  },
});

export default system;
