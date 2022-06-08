import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ media: { imdbID, Year, Poster, Title, Type } }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWbcZuv4ggYMcyq5YNNfFaKHHbcVypPmGXF69zWAHUg&s"
        //{Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} 
        alt={Title}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}