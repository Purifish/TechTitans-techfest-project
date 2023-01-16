import './Explore.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
// import smallBoxImage from '../assets/smallBoxes.jpg'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Explore({posts}) {
  return (
    <Paper
    variant="outlined"
      sx={{
        p: 5,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={3}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="small-box" src={posts.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {posts.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Dimensions: 35cm (L) x 25cm (W) x 25cm (H)
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Approximately the content of a backpack
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Things that fit: Documents & photos, Books & stationery, Small appliances & cookware, Toys, Laptop
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $8.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

