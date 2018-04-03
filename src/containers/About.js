import React from 'react'
//
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

export default () => (
  <Grid container spacing={16}>
    <Grid item xs={12} sm={3} />
    <Grid item xs={12} sm={6}>
      <Typography variant="body1">
        This is what we're all about. <span role="img" aria-label="smile">😁</span>
      </Typography>
      <Typography variant="body1">
        React, static sites, performance, speed. It's the stuff that makes us tick.
      </Typography>
    </Grid>
    <Grid item xs={12} sm={3} />
  </Grid>
)
