import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed flex={4} />
          <Rightbar flex={2} />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
