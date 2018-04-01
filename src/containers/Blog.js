import React from "react";
import { withRouteData, Link } from "react-static";
//
import Typography from "material-ui/Typography";
import Grid from 'material-ui/Grid';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import StarBorder from 'material-ui-icons/StarBorder';

export default withRouteData(({ posts }) => (
  <Grid container spacing={16}>
    <Grid item xs={12} sm={3} />
    <Grid item xs={12} sm={6}>
      <Typography variant="headline" gutterBottom>
        It's blog time.
      </Typography>
      <Typography variant="body1" component="div">
        All Posts:
      </Typography>
      <List component="nav">
        {posts.map(post => (
          <ListItem
            button
            to={`/blog/post/${post.id}/`}
            component={Link}
            key={post.id}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={post.title} />
          </ListItem>
        ))}
      </List>
      <Grid item xs={12} sm={3}/>
    </Grid>
  </Grid>
));
