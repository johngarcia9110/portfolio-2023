import { MotionBox } from "@/components/Motion";
import { Stack, Typography } from "@mui/material";
import IconButton from "@/components/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";

const LetsConnectLinks = () => {
  const navigate = useNavigate();
  return (
    <MotionBox
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
        px: 2,
        //border: { xs: "none", md: `2px solid ${colors.secondary}` },
        border: `1px solid rgb(251 251 251 / 48%)`,
        borderRadius: "12px",
        background: "rgb(229 229 229 / 60%)",
        backdropFilter: "blur(11.6px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <Typography sx={{ fontWeight: "400", color: "#6c6c6c" }}>
        Let's connect!
      </Typography>

      <Stack direction={"row"} gap={1}>
        <IconButton icon={<EmailIcon />} onClick={() => navigate("/contact")} />
        <IconButton
          icon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/johngarcia9110/"
          target="_blank"
        />
        <IconButton
          icon={<GitHubIcon />}
          href="https://github.com/johngarcia9110"
          target="_blank"
        />
      </Stack>
    </MotionBox>
  );
};
export default LetsConnectLinks;
