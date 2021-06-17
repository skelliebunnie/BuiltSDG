import * as React from "react"
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Layout from '../components/Layout'

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    padding: '2rem 0',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginLeft: '10%',
    color: theme.palette.primary.main,

    '& div': {
      position: 'relative',
      flex: 1,
      background: 'rgba(255,255,255,0.85)',
      padding: '2rem 2.5rem',
      borderRadius: 4
    },
  },
  title: {
    fontSize: '8rem',
    textShadow: '1px 1px 1px black',
    margin: 0,
    paddingBottom: '1.5rem',
    lineHeight: '8rem',
  },
  subtitle: {
    fontSize: '2rem',
    color: theme.palette.neutral[600],
    margin: 0,
    padding: 0
  }
}));

// markup
const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout activePage="home">
      <title>BuiltSDG</title>
      <Container className={classes.container} maxWidth="md">
        <div>
          <h1 className={classes.title}>Make It Your Own</h1>
          <p className={classes.subtitle}>This is a snippet about what the company can do for the visitor / client.</p>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
