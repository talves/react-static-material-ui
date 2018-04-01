import React from 'react'
import { withRouteData, Link } from 'react-static'
//
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import ArrowBack from 'material-ui-icons/ArrowBack'


export default withRouteData(({ post }) => (
  <div>
    <Button variant="fab" color="primary" icon="edit" component={Link} to="/blog" gutterBottom>
      <ArrowBack />
    </Button>
     
    <Typography variant="title" gutterBottom>
      {post.title}
    </Typography>
    <Typography variant="body1">
      {post.body}
    </Typography>
  </div>
))
