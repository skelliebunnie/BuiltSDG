import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Button } from '@material-ui/core'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

const useStyles = makeStyles((theme) => ({
  button: {
    background: 'red'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Layout activePage="about">
      <Container>
        <ProjectCard image="alexander-fife-rDSwQ_6XFUs-unsplash.jpg">
          Project description text will go here. Should there be a space for a date? What about other details (e.g. time to completion)? And should there be a link to a page with more information? There's one right now, just as a demo.
          <Button variant="contained">Button</Button>
        </ProjectCard>
      </Container>
    </Layout>
  )
}
