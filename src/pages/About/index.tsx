import { useThemeVars } from "@/hooks/useThemeVars";
import PageTitle from "./_patials/PageTitle";
import BackgroundSection from "./_patials/BackgroundSection";
import { Box, Container, Typography } from "@mui/material";
import { SkillBox } from "@/components/SkillBox";

const About = (props: RouteComponentProps) => {
  const { colors } = useThemeVars();
  return (
    <>
      <PageTitle />
      <BackgroundSection />
      <Box>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            textAlign={"center"}
            mb={4}
            sx={{ fontWeight: "800", fontSize: 24 }}
          >
            Things im good with.
          </Typography>
          <SkillBox />
        </Container>
      </Box>
    </>
  );
};
export default About;
