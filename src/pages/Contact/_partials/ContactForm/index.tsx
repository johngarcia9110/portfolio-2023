import { MotionBox } from "@/components/Motion";
import { useThemeVars } from "@/hooks/useThemeVars";
import { LoadingButton } from "@mui/lab";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();
  const submit = () => console.log("submitting");
  const { colors } = useThemeVars();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MotionBox
        sx={{
          background: colors.mutedWhite,
          py: 4,
          px: 4,
          pb: 6,
          width: "100%",
          maxWidth: "720px",
          borderRadius: "8px",
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Box
          mb={4}
          pb={2}
          sx={{ borderBottom: `1px solid ${colors.backgrounds.lightGray}` }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "600", fontSize: "1.4rem", mb: 1 }}
          >
            👋 Let's connect.
          </Typography>
          <Typography>
            Right now I'm not actively looking for a new full-time roll but am
            always open to discussing new opportunities for full-time or
            contract work.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit(submit)}>
          <Stack spacing={4}>
            <Stack spacing={4} direction={"row"}>
              <TextField
                id="name"
                label="Your name"
                variant="outlined"
                placeholder="Kelsier Tekiel"
                InputLabelProps={{ shrink: true }}
                {...register("name")}
                sx={{ flex: 1 }}
              />
              <TextField
                id="name"
                label="Your email"
                variant="outlined"
                placeholder="example@email.com"
                InputLabelProps={{ shrink: true }}
                {...register("email")}
                sx={{ flex: 1 }}
              />
            </Stack>
            <TextField
              id="name"
              label="Your message"
              multiline
              rows={4}
              placeholder="What do you want to talk about?"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              {...register("message")}
            />
            <Stack direction={"row"} justifyContent={"flex-end"}>
              <LoadingButton
                variant="contained"
                size="large"
                sx={{ maxWidth: "180px", width: "100%" }}
                type="submit"
                loading={isSubmitting}
              >
                {" "}
                Submit
              </LoadingButton>
            </Stack>
          </Stack>
        </form>
      </MotionBox>
    </Container>
  );
};
export default ContactForm;
