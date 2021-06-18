import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Button, Typography } from '@material-ui/core'
import { Link } from "gatsby-theme-material-ui";

import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    padding: '1rem 0',
  },
  gallery: {
    marginTop: '2rem',
  }
}));

const images = [
  {
    title: "Home Sweet Home?",
    image: "iza-gawrych-8qLTsDOf6eo-unsplash.jpg",
    text: "Quo quisquam beatae amet? Maxime earum, provident esse odit ipsa.",
    link: "/house",
  },
  {
    title: "<3 Puppy",
    image: "ben-owen-FFwNGYZK-2o-unsplash.jpg",
    text: "Delectus, ab voluptas distinctio facilis repellendus commodi quidem est quo sequi ad sapiente quam!",
    link: "/puppy",
  },
  {
    title: "Lazy Afternoon",
    image: "daniel-wirtz-mj54JPQpF8M-unsplash.jpg",
    text: "Nam voluptas eaque quasi numquam molestias maiores recusandae distinctio. Accusamus, accusantium omnis. Sunt.",
    link: "/living-room",
  },
  {
    title: "Coffee Rings",
    image: "ben-kolde-_dzAvvu-5oQ-unsplash.jpg",
    text: "Nobis voluptatum, facilis aliquam debitis dolores nostrum inventore, reprehenderit sit doloribus beatae consequuntur dolore, quo nam illo sed accusamus? Debitis, at numquam!",
    link: "/coffee-cup-on-notebook",
  },
  {
    title: "Mugged Succulent",
    image: "art-and-soil-bangalore-zHsWYooD42k-unsplash.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam ipsum, commodi labore maxime expedita voluptatum sint.",
    link: "/mug-on-table",
  },
];

export default function Projects() {
  const classes = useStyles();

  return (
    <Layout activePage="projects">
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h2">Projects</Typography>
        <Grid container spacing={2} className={classes.gallery}>
          {images.map(({ title, image, text, link }) => (
            <Grid item xs={12} md={4}>
              <ProjectCard image={image} link={link} mediaSide="top">
                <Typography variant="h6">{title}</Typography>
                <p>{text}</p>
                <Link to={link}>
                  <Button variant="contained">View</Button>
                </Link>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
