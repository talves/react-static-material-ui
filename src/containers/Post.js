import React from 'react'
import { withRouteData, Link } from 'react-static'
//
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import ArrowBack from 'material-ui-icons/ArrowBack'


export default withRouteData(({ post }) => (
  <Grid container spacing={16}>
    <Grid item xs={12} sm={3}>
      <Button variant="fab" color="primary" icon="edit" component={Link} to="/blog" gutterBottom>
        <ArrowBack />
      </Button>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="title" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1">
        {post.body}
      </Typography>
    </Grid>
    <Grid item xs={12} sm={3}/>
  </Grid>
))
