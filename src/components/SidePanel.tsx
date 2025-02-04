import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const SidePanel = ({ children }: Props) => {
  return (
    <Box width="150px">
      {children}
    </Box>
  );
};

export default SidePanel;
