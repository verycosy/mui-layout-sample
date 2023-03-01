import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Rightbar } from './components/Rightbar';
import { Navbar } from './components/Navbar';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { Add } from './components/Add';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#806fff',
        light: 'skyblue',
      },
      secondary: {
        main: '#332C66',
      },
      otherColor: {
        main: '#999',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={'background.default'}
        color={'text.primary'}
        sx={{ margin: 0, padding: 0 }}
      >
        <Navbar />
        <Stack
          direction='row'
          spacing={{
            sx: 0,
            md: 2,
          }}
          justifyContent='space-between'
        >
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
