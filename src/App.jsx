import React from 'react';
import { Typography, BottomNavigation, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const myStyle = {
  backgroundColor: 'background.paper',    //useful pattern if I want reusable style in many Box elements
  marginTop: 4,
  p: 2,
}

const pages = ['Products', 'Pricing', 'Blog'];
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera sx={{ mr: 2 }} />
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
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item sx={{ padding: '20px 0' }} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia image='https://source.unsplash.com/random' title="Image title" sx={{ paddingTop: '56.25%' }} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5'>
                      Heading
                    </Typography>
                    <Typography gutterBottom>
                      This is a media card to describe the content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color='primary'>View</Button>
                    <Button size="small" color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <BottomNavigation sx={{ backgroundColor: 'background.paper', py: '50px', px: '0', flexDirection: 'column', mt: 4 }}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color="textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aut.
        </Typography>
      </BottomNavigation>
    </>
  )
}

export default App;