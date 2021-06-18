import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
  quote: {
    fontSize: "x-large",
    padding: "0.5rem 1rem",
    borderLeft: `4px solid ${palette.secondary.main}`,
    display: "block",
    pageBreakInside: "avoid",
    breakInside: "avoid",
    clear: 'both',
    maxWidth: '70%',
    margin: '0 auto',

    '& cite': {
      display: 'block',
      fontSize: '1rem',
      textAlign: 'right',

      '&::before': {
        content: '" -- "',
      }
    }
  },
}));

export default function PullQuote({ children }) {
  const classes = useStyles();

  return (
    <blockquote className={classes.quote}>
      {children}
    </blockquote>
  );
}
