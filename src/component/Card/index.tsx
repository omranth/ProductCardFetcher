import { FunctionComponent } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '../index';
import { _Card_props } from './Product.type';

const _Card: FunctionComponent<_Card_props> = ({ image, title = 'omran ', description }) => {
  return (
    <Card sx={{ maxWidth: '100%', width: 354, margin: '20px auto' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="large"
          fullWidth
          sx={{
            background: '#1976d2',
            color: 'white',
            '&:hover': {
              color: '#1976d2',
              backgroundColor: '#eee',
            },
          }}
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default _Card;
