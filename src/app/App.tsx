import { MantineProvider, createTheme } from "@mantine/core";
import Router from "./Router";
import "@mantine/core/styles.css";
import "./App.css";

const theme = createTheme({
  autoContrast: true,
  white: "#fff",
  black: "#23252F",
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto" withGlobalClasses>
      <Router />
    </MantineProvider>
  );
}

export default App;
