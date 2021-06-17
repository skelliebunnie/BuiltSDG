import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardContent, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem',
    borderRadius: theme.spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
    overflow: 'visible !important',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: theme.spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: theme.spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      marginLeft: theme.spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    // '&:after': {
    //   content: '" "',
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   width: '100%',
    //   height: '100%',
    //   backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
    //   borderRadius: theme.spacing(2), // 16
    //   opacity: 0.5,
    // },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  const cardImage = require(`../images/${props.image}`);

  return (
    <Card color="primary" className={classes.root}>
      <CardMedia
        className={classes.media}
        image={cardImage.default}
      />
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  )
}
