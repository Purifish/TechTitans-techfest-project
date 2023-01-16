import './Explore.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
// import smallBoxImage from '../assets/smallBoxes.jpg'
import Rating from '@mui/material/Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Explore({posts}) {
  const navigate = useNavigate()
  return (
    <Link to={`/explore/${posts._id}`} style={{ textDecoration: 'none', color: 'white' }} >
        <Paper
    variant="outlined"
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: "100%",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={1}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }} >
            <Img alt="small-box" src={posts.img} />
          </ButtonBase>
        </Grid>
        <Grid item md={8} container>
          <Grid item ms container direction="column" spacing={2}>
            <Grid item md ={6}>
              <Typography gutterBottom variant="subtitle1" component="div">
                
              </Typography>
              <Typography component="legend">{posts.name}</Typography>
              <Rating name="half-rating-read" precision={0.5} value={posts.rating} readOnly />
              <Typography sx={{ fontWeight: 'bold' }} variant="body1" gutterBottom>
                {posts.role}
              </Typography>
              <Typography variant="body1" color="text.secondary">
              <LocationOnIcon />{posts.location} {posts.days} 
              </Typography>
              <Typography variant="body1" color="text.primary">
              {posts.compensation}
              </Typography>
              <hr></hr>
              <Typography variant="body1" color="text.secondary">
              {posts.skills}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Link>

  );
}

