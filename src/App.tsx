import { ThemeProvider } from "@mui/material";
import theme from "./styles";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
