import { MotionBox, MotionText } from "@/components/Motion";
import { useThemeVars } from "@/hooks/useThemeVars";
import { Box, Typography } from "@mui/material";
import LetsConnectLinks from "../LetsConnectLinks";

const HeroMobile = () => {
  const { colors } = useThemeVars();
  const baseDelay = 0.2;
  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "block", sm: "none" },
      }}
    >
      <Box
        component={"img"}
        sx={{
          width: "100%",
          display: "block",
          maxWidth: "320px",
          mx: "auto",
          mb: -2,
          mt: -2,
        }}
        src="/me-blob.png"
        alt="me"
      />
      <MotionText
        sx={{
          fontSize: "5.5rem",
          lineHeight: "5.5rem",
          fontWeight: "900",
          //position: "absolute",
          top: "-48px",
          left: 2,
          background:
            "linear-gradient(180deg, rgba(248, 159, 56, 0.60) 0%, rgba(248, 159, 56, 0.00) 100%)",
          backgroundClip: "text",
          textFillColor: "transparent",
          letterSpacing: "-0.04em",
          mb: -4,
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: baseDelay, duration: 0.5 }}
      >
        GARCIA
      </MotionText>
      <MotionText
        sx={{
          //position: "absolute",
          top: "24px",
          left: 2,
          fontSize: "5.2rem",
          fontWeight: "900",
          lineHeight: { xs: "4rem", md: "14rem" },
          letterSpacing: "-0.04em",
          //   textAlign: "center",
          mb: 3,
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        JOHN
      </MotionText>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: 6,
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <MotionBox
            sx={{
              width: "100%",
              position: "relative",
              mb: 1,
              //   ":after": {
              //     content: "''",
              //     display: "block",
              //     width: "100%",
              //     height: "2px",
              //     background: colors.black,
              //     position: "absolute",
              //     top: "50%",
              //     zIndex: 0,
              //   },
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: baseDelay + 0.4, duration: 0.5 }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                //backgroundColor: colors.mainBackground,
                display: "inline-block",
                fontSize: "1rem",
                lineHeight: "1rem",
                pr: "16px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Senior Front End Engineer
            </Typography>
          </MotionBox>
          <MotionText
            mb={6}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Creating performant and reliable user experiences on the web makes
            my brain happy.
          </MotionText>
          <LetsConnectLinks />
        </Box>
      </Box>
    </Box>
  );
};
export default HeroMobile;
