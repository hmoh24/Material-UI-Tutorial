import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { makeStyles } from '@mui/material';

const myStyle = {
  backgroundColor: 'background.paper',    //useful pattern if I want reusable style in many Box elements
  marginTop: 20,
  p: 2,
}

const pages = ['Products', 'Pricing', 'Blog'];

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>
            Photo Album
          </Typography>
          <Box sx={{ flexGrow: 1, ml: 2, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={ }
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={myStyle}>
          <Container maxWidth='sm'>
            <Typography variant='h2' align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hi! This is a photo album and Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, saepe dolorem culpa voluptas vel placeat ad itaque error quidem accusamus?
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color='primary'>
                    Secondary Actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Box>
      </main>
    </>
  )
}

export default App;