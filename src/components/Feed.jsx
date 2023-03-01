import { Box, Skeleton, Stack } from '@mui/material';
import { useState } from 'react';
import { Post } from './Post';

export const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={2}>
      {loading ? (
        <Stack>
          <Skeleton variant='text' height={100} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='rectangular' height={300} />
        </Stack>
      ) : (
        <>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </>
      )}
    </Box>
  );
};
