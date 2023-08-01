import { Stack, Box, Link, Container, Typography } from "@mui/material";
import { Link as RRLink, useLocation } from "react-router-dom";
import { useThemeVars } from "@/hooks/useThemeVars";
import { mainNavigationLinks } from "@/config";
import { motion } from "framer-motion";
import Desktop from "./_partials/Desktop";
import Mobile from "./_partials/Mobile";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const MainNavigation = () => {
  const { colors } = useThemeVars();
  const location = useLocation();
  return (
    <Box
      sx={{
        pt: { xs: "16px", sm: "24px" },
        pb: "24px",
        position: "relative",
        zIndex: 20,
      }}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component={RRLink} sx={{ width: "100%", maxWidth: "40px" }} to="/">
          <img src="/Logo.svg" alt="logo" width="100%" />
        </Box>

        <Desktop links={mainNavigationLinks} />
        <Mobile links={mainNavigationLinks} />
      </Container>
    </Box>
  );
};
export default MainNavigation;
