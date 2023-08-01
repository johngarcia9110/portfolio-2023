import { useThemeVars } from "@/hooks/useThemeVars";
import MainNavigation from "@/navigation/MainNavigation";
import { Box, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import AboutBlob from "./_partials/AboutBlob";
import HomeBlob from "./_partials/HomeBlob";
import ContactBlob from "./_partials/ContactBlob";

const AnimatedOutlet = () => {
  const [context] = useState(useOutlet());
  return context;
};

const MotionBox = motion(Box);

export const PublicLayout = () => {
  const { colors } = useThemeVars();
  const location = useLocation();
  const showHomeBlob = location.pathname === "/";
  const showAboutBlob = location.pathname === "/about";
  const showContactBlob = location.pathname === "/contact";

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundColor: colors.mainBackground,
        position: "relative",
      }}
      direction={"column"}
      alignContent={"flex-start"}
    >
      <MainNavigation />
      <AnimatePresence mode="wait">
        <MotionBox
          key={location.pathname + "1"}
          sx={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          exit={{ opacity: 0 }}
        >
          <AnimatedOutlet />
        </MotionBox>
        {showHomeBlob && <HomeBlob key={`${location.pathname}-home-blob`} />}
        {showAboutBlob && <AboutBlob key={`${location.pathname}-about-blob`} />}
        {showContactBlob && (
          <ContactBlob key={`${location.pathname}-contact-blob`} />
        )}
      </AnimatePresence>
    </Stack>
  );
};
