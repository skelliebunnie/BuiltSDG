import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardContent, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: 180,
    backgroundColor: "white",
    borderRadius: 4,
    marginLeft: 80,

    "&.left": {
      overflow: "visible",
    },

    '& a': {
      color: theme.palette.neutral[900],
      cursor: 'pointer'
    }
  },
  media: {
    height: 200,

    ".left &": {
      height: 160,
      width: 160,
      position: "absolute",
      transformOrigin: "center left",
      transform: "translateX(-50%)",
      top: "50%",
      marginTop: "-80px",
      borderRadius: 4,
    },
  },
  content: {
    backgroundColor: theme.palette.neutral[50],

    ".left &": {
      paddingLeft: 100,
    },
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  const cardImage = require(`../images/${props.image}`);

  return (
    <Card color="primary" className={`${classes.root} ${props.mediaSide}`}>
      <Link to={props.link} underline="none">
        <CardMedia
          className={classes.media}
          image={cardImage.default}
          alt=""
          title=""
        />
        <CardContent className={classes.content}>{props.children}</CardContent>
      </Link>
    </Card>
  );
}
