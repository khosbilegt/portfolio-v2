import { MantineProvider, createTheme } from "@mantine/core";
import Router from "./Router";
import "@mantine/core/styles.css";
import "./App.css";

const theme = createTheme({
  autoContrast: true,
  white: "#B4B7C1",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}

export default App;
