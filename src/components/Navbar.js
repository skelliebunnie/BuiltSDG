import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton, MenuIcon } from '@material-ui/core'
import { Link } from 'gatsby-theme-material-ui'

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 0,
  },
  navbar: {
    color: 'white',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',

    '& a': { 
      color: 'white',
    },
  },
  navbarColor: {
    backgroundColor: theme.palette.accent.main,
  },
  nav: {
    fontSize: '2rem',

    '& ul': {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
    },
    '& li': {
      flex: 1,

      '& > a': {
        display: 'block',
        position: 'relative',
        transition: 'all 0.3s ease-out',
        padding: '0.5rem 3rem',
        color: 'white',

        '&::after': {
          position: 'relative',
          content: '""',
          display: 'block',
          width: 0,
          left: '50%',
          height: "4px",
          backgroundColor: theme.palette.secondary[500],
          transition: 'all 0.3s ease-out',

          '.home-page &': {
            backgroundColor: theme.palette.accent[700],
          }
        }
      },

      '&:hover a': {
        color: theme.palette.primary[400],
        textDecoration: 'none',

        '.home-page &': {
          color: theme.palette.primary.main,
        },

        '&::after': {
          width: '100%',
          transform: 'translateX(-50%)'
        }
      },

    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Navbar({ active }) {
  const classes = useStyles();

  const logo = require("../images/logo.png").default;

  return (
    <header className={active === 'home' ? `${classes.root}` : `${classes.root} ${classes.navbarColor}`}>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar className={classes.navbar}>
          <Link to="/">
            <img src={logo} alt="builtSDG Logo" style={{verticalAlign: 'middle', margin: '20px 30px 20px 10px'}} />
            <Typography variant="h3" style={{display: 'inline-block'}}>BuiltSDG</Typography>
          </Link>
          <nav className={classes.nav}>
            <ul>
              <li>
                <Link to="/" className={active === "home" ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={active === "about" ? "active" : ""}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className={active === "projects" ? "active" : ""}>
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  );
}
