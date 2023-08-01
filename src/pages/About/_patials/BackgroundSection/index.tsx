import { MotionStack } from "@/components/Motion";
import { Box, Container, Typography } from "@mui/material";

const BackgroundSection = () => {
  return (
    <Container maxWidth={"lg"} sx={{ mb: { xs: 12, sm: 12 }, pt: 4 }}>
      <MotionStack
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Box
          sx={{
            flex: "1 1",
            display: "flex",
            justifyContent: "center",
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{ maxWidth: "100%" }}
            component={"img"}
            src={"/aboutHero.png"}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight={"bold"} mb={1}>
            Background.
          </Typography>

          <Typography>
            The core of my career started in San Francisco working on marketing
            web properties, building experiences that motivated users to take
            action. Early on I developed a passion for understanding users and
            their needs which eventually led me into application development in
            the payments space where the empathy I have for users could make
            more of an impact
          </Typography>
        </Box>
      </MotionStack>
    </Container>
  );
};
export default BackgroundSection;
