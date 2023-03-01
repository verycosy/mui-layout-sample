import { AccountBox, Home, ModeNight, Settings } from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';

export const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      <Box position='fixed'>
        <nav>
          <List>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={'a'} href='#home'>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary='Homepage' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={'a'} href='#home'>
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={'a'} href='#home'>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary='Setting' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={'a'} href='#home'>
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Box>
  );
};
