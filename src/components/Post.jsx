import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';

export const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'red' }}>R</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title='제목'
        subheader='부제'
      />
      <CardMedia
        component='img'
        height='20%'
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Streifenhoernchen.jpg/250px-Streifenhoernchen.jpg'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          ddd
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>

        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};
