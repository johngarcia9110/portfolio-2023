import { MotionText } from "@/components/Motion";
import { Box } from "@mui/material";

const PageTitle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: "64px",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <MotionText
          sx={{
            fontSize: "8rem",
            fontWeight: "900",
            position: "absolute",
            bottom: 0,
            right: "-20%",
            background:
              "linear-gradient(180deg, rgb(250 197 159) 0%, rgba(248, 159, 56, 0.00) 100%)",
            backgroundClip: "text",
            textFillColor: "transparent",
            letterSpacing: "-0.04em",
            lineHeight: "8rem",
          }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          ME
        </MotionText>
        <Box sx={{ position: "relative" }}>
          <MotionText
            variant="h4"
            fontWeight={"bold"}
            sx={{
              fontSize: "4rem",
              letterSpacing: "-0.04em",
              lineHeight: "4rem",
              textAlign: "center",
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Contact
          </MotionText>
        </Box>
      </Box>
      <MotionText
        variant="subtitle1"
        fontWeight={"600"}
        mb={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        I'd love to hear from you.
      </MotionText>
    </Box>
  );
};
export default PageTitle;
