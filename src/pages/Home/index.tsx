import { useThemeVars } from "../../hooks/useThemeVars";
import { Box, Container } from "@mui/material";
import HeroDesktop from "./_partials/HeroDesktop";
import HeroMobile from "./_partials/HeroMobile";

const Home = (props: RouteComponentProps) => {
  const { colors } = useThemeVars();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflowX: "hidden",
      }}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          flex: 1,
          alignItems: { xs: "flex-start", md: "center" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HeroDesktop />
        <HeroMobile />
      </Container>
    </Box>
  );
};
export default Home;
