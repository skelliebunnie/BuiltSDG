import React from 'react'
import { makeStyles } from '@material-ui/core';

import Navbar from './Navbar'

import bgImage from "../images/jorge-de-jorge-NvqYkDPE0Rw-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.typography.body,
    margin: 0,
    padding: 0,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    minHeight: '100vh',
    backgroundColor: theme.palette.neutral[100],

    '&.home-page': {
      background: `center / cover no-repeat url(${bgImage})`,
      color: 'white',
    }
  },
  pageContent: {
    flex: 1,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 0,
    padding: 0,
  },
  pageFooter: {
    flex: 0,
    textAlign: 'center',

    '& a': {
      color: theme.palette.secondary.main,
      textDecoration: 'none'
    }
  }
}));

export default function Layout(props) {
  const classes = useStyles();
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={`${classes.root} ${props.activePage}-page`}>
      <Navbar active={props.activePage} />
      <main className={classes.pageContent}>
        {props.children}
      </main>
      <footer className={classes.pageFooter}>
        <p>Copyright &copy; {year} <a href="mailto:builtsdg-mackenzie@outlook.com">builtSDG</a></p>
      </footer>
    </div>
  )
}