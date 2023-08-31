import { MotionBox } from "@/components/Motion";
import { useThemeVars } from "@/hooks/useThemeVars";
import { LoadingButton } from "@mui/lab";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();
  const submit = async (data: any) => {
    try {
      const resp = await fetch("https://formspree.io/f/mwkdvdol", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(resp);
      reset();
    } catch (e) {
      console.error(e);
    }
  };
  const { colors } = useThemeVars();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 12,
      }}
      maxWidth={"lg"}
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
            <Stack spacing={4} direction={{ xs: "column", md: "row" }}>
              <TextField
                id="name"
                label="Your name"
                variant="outlined"
                placeholder="Kelsier Tekiel"
                InputLabelProps={{ shrink: true }}
                {...register("name", { required: true })}
                error={!!errors.name}
                helperText={errors.name ? "This field is required" : null}
                sx={{ flex: 1 }}
              />
              <TextField
                id="email"
                label="Your email"
                variant="outlined"
                placeholder="example@email.com"
                InputLabelProps={{ shrink: true }}
                error={!!errors.email}
                helperText={errors.email ? "This field is required" : null}
                {...register("email", { required: true })}
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
              error={!!errors.message}
              helperText={errors.message ? "This field is required" : null}
              {...register("message", { required: true })}
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
