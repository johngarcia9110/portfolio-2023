import { useThemeVars } from "@/hooks/useThemeVars";
import { Box, Typography } from "@mui/material";
import LetsConnectLinks from "../LetsConnectLinks";
import { MotionBox, MotionText } from "@/components/Motion";

const HeroDesktop = () => {
  const { colors } = useThemeVars();
  const baseDelay = 0.2;
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        transform: {
          xs: "translateY(10%)",
          sm: "translateY(30%)",
          md: "translateY(-30%)",
        },
        display: { xs: "none", sm: "block" },
      }}
    >
      <MotionText
        sx={{
          fontSize: { xs: "6rem", sm: "8rem", md: "14rem", lg: "18rem" },
          lineHeight: { xs: "4rem", sm: "8rem", md: "14rem", lg: "18rem" },
          fontWeight: "900",
          position: "absolute",
          top: { xs: "-10%", sm: "-18%", md: "-24%" },
          left: 0,
          background:
            "linear-gradient(180deg, rgba(248, 159, 56, 0.60) 0%, rgba(248, 159, 56, 0.00) 100%)",
          backgroundClip: "text",
          textFillColor: "transparent",
          letterSpacing: "-0.04em",
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: baseDelay, duration: 0.5 }}
      >
        GARCIA
      </MotionText>
      <Box
        sx={{
          display: "flex",
          gap: 6,
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <MotionText
            sx={{
              fontSize: { sm: "8rem", md: "12rem", lg: "14rem" },
              fontWeight: "900",
              lineHeight: { sm: "8rem", md: "12rem", lg: "14rem" },
              mb: 1,
              letterSpacing: "-0.04em",
            }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            JOHN
          </MotionText>
          <MotionBox
            sx={{
              width: "100%",
              position: "relative",
              mb: 1,
              ":after": {
                content: "''",
                display: "block",
                width: "100%",
                height: "2px",
                background: colors.black,
                position: "absolute",
                top: "50%",
                zIndex: 0,
              },
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: baseDelay + 0.4, duration: 0.5 }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                backgroundColor: colors.mainBackground,
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
        <MotionBox
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: "50%" },
          }}
        >
          <Box
            component={"img"}
            sx={{
              //maxWidth: { xs: "250px", md: "850px" },
              width: "100%",
              maxWidth: { xs: "250px", md: "480px" },
              zIndex: 1,
              position: "relative",
            }}
            src="/me-blob.png"
            alt="me"
          />
        </MotionBox>
      </Box>
    </Box>
  );
};

export default HeroDesktop;
