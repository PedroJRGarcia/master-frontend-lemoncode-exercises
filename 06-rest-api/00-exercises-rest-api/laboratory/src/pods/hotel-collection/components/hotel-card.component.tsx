import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CharacterEntityVm } from '../hotel-collection.vm';
import * as classes from './hotel-card.styles';

interface Props {
  hotel: CharacterEntityVm;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const HotelCard: React.FunctionComponent<Props> = (props) => {
  const { hotel, onEdit, onDelete } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Hotel">{hotel.name}</Avatar>}
        title={hotel.name}
        subheader={hotel.species}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={hotel.image}
            title={hotel.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {hotel.status}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(hotel.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(hotel.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
