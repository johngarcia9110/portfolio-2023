import { useThemeVars } from "@/hooks/useThemeVars";
import { Box, Container } from "@mui/material";

const PageHeader = ({ children }: React.PropsWithChildren) => {
  const { colors } = useThemeVars();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: colors.backgrounds.lightGray,
      }}
    >
      <Container maxWidth={"xl"}>{children}</Container>
    </Box>
  );
};
export default PageHeader;
