import { Button, styled } from '@mui/material';

export const SampleButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.otherColor.main,
}));
