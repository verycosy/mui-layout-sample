import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import { useState } from 'react';

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  marginBottom: 20,
}));

export const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title='Add'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: {
            xs: 'calc(50% - 25px)',
            md: 20,
          },
        }}
      >
        <Fab color='primary'>
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal open={open} onClose={() => setOpen(false)}>
        <Box
          width={400}
          height={280}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={4}
        >
          <Typography variant='h6' color='gray' textAlign='center'>
            Create post
          </Typography>

          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} component='span'>
              John Doe
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: '100%' }}
            multiline
            rows={3}
            placeholder={`What's on your mind?`}
            variant='standard'
          />

          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>

          <ButtonGroup variant='contained' fullWidth>
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
