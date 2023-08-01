import { Box } from "@mui/material";
import ContactForm from "./_partials/ContactForm";
import PageTitle from "./_partials/PageTitle";

const Contact = () => {
  return (
    <>
      <Box mb={8}>
        <PageTitle />
      </Box>

      <ContactForm />
    </>
  );
};
export default Contact;
