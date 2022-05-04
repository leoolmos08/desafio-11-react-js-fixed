import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl, description }) => {
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={pictureUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Stack>
                    <Chip icon={<MonetizationOnIcon/>} label={price}/>
                </Stack>
                <Stack>
                    <Chip icon={<Inventory2OutlinedIcon/>} label={stock}/>
                </Stack>
                <IconButton>
                   <Link to={`/item/${id}`}><InfoOutlinedIcon /></Link>
                </IconButton>
            </CardActions>
        </Card>
    );
}
export default Item;