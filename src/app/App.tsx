import { MantineProvider, createTheme } from "@mantine/core";
import Router from "./Router";
import "@mantine/core/styles.css";
import "./App.css";

const theme = createTheme({
  autoContrast: true,
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}

export default App;
