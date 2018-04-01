import React, { PureComponent } from 'react'
import { withSiteData } from 'react-static'
//
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import logoImg from '../logo.png'

const styles = theme => ({
  wrap: {
    align: 'center',
  },
  centerImage: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%',
  }
})

class Home extends PureComponent {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.wrap}>
        <Typography variant="headline" align="center" gutterBottom>
          Welcome to
        </Typography>
        <img className={classes.centerImage} src={logoImg} alt="" />
      </div>
    )
  }
}

const HomeWithStyles = withStyles(styles)(Home)

export default withSiteData(HomeWithStyles)
