import * as React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    padding: "2rem 0",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    color: theme.palette.primary.main,
    margin: 0,
    alignSelf: "start",

    [theme.breakpoints.up("md")]: {
      maxWidth: "40%",
      marginLeft: "12rem",
    },

    "& section": {
      background: "rgba(255,255,255,0.5)",
      padding: "2rem 2.5rem",
      borderRadius: 16,
    },
  },
  title: {
    fontSize: "8rem",
    textShadow: `2px 2px 1px ${theme.palette.accent.main}`,
    margin: 0,
    paddingBottom: "1.5rem",
    lineHeight: "8rem",
  },
  subtitle: {
    fontSize: "2rem",
    color: theme.palette.accent.main,
    margin: 0,
    padding: 0,
  },
}));

// markup
const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout activePage="home">
      <title>BuiltSDG</title>
      <article className={classes.container}>
        <section>
          <h1 className={classes.title}>Make It Your Own</h1>
          <p className={classes.subtitle}>
            This is a snippet about what the company can do for the visitor /
            client.
          </p>
        </section>
      </article>
    </Layout>
  );
}

export default IndexPage
