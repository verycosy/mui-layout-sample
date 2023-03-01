import { Mail, Notifications, Pets } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const StyledToobar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: 20,
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToobar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          ADMIN
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />

        <Search>
          <InputBase placeholder='search...' />
        </Search>

        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>

          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Streifenhoernchen.jpg/250px-Streifenhoernchen.jpg'
            onClick={() => setOpen(true)}
          />
        </Icons>

        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Streifenhoernchen.jpg/250px-Streifenhoernchen.jpg'
          />
          <Typography component='span'>John</Typography>
        </UserBox>
      </StyledToobar>

      <Menu
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
