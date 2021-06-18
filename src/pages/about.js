import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import PullQuote from '../components/PullQuote'

const useStyles = makeStyles((theme) => ({
  imgWrap: {
    '& img': {
      float: 'left',
      width: '100%',
      maxWidth: '300px',
      margin: '0 1rem 1rem 0',
    },
  }
}));

export default function About() {
  const classes = useStyles();

  const cardImage = require(`../images/matthew-ball-2L11W39hDYo-unsplash.jpg`);

  return (
    <Layout activePage="about">
      <Container maxWidth="md">
        <Typography variant="h2">About Us</Typography>
        <article className={classes.imgWrap}>
          <img src={cardImage.default} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos
            laborum sed, veritatis quam fugiat est magni laboriosam, deserunt
            tenetur illum, iste fuga aliquid? Voluptatem dolorem eius minus
            numquam et?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            necessitatibus quam amet consequuntur nobis quae accusamus. Fugit in
            totam inventore. Voluptates tempora nobis obcaecati quos earum
            consectetur saepe enim laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            cumque, voluptatum quisquam maxime, possimus quia assumenda tenetur
            officia dignissimos voluptates quas eum blanditiis, dolores
            necessitatibus aut quaerat veritatis iste atque.
          </p>
          <p>
            Veritatis nam est possimus tempore laboriosam at cum, officiis
            fugiat ullam ducimus id dicta! Fuga, nemo? Libero, odio sequi
            eligendi dolor cum consectetur, ea ipsa, nulla rem nisi natus eaque.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            dolorem doloremque, consequuntur est quaerat quos minima quam.
            Temporibus repellendus excepturi id dolor similique tempora.
            Temporibus quo voluptates dolorem necessitatibus impedit!
          </p>
          <p>
            Quam dicta esse nam odit! Dolorum optio eum nobis velit harum, aut,
            adipisci fugit necessitatibus consequuntur dignissimos nihil veniam
            quasi maiores modi cum voluptatum? Atque unde nisi at quos quod!
          </p>
          <p>
            Alias quidem esse reiciendis quam? Debitis vitae expedita
            perferendis necessitatibus. Obcaecati blanditiis similique possimus
            optio aliquid quam, libero ex recusandae earum! Consequatur
            voluptates voluptatibus quaerat illo at esse praesentium adipisci?
          </p>
          <PullQuote>
              Inventore, dolorem odit ratione consequuntur eius explicabo. Neque, tenetur tempore, mollitia architecto.
              <cite>Author</cite>
          </PullQuote>
          <p>
            Quisquam similique nemo fuga corrupti sequi reiciendis quibusdam
            iste eaque iusto nulla earum ad magni voluptate alias ullam
            excepturi blanditiis veritatis aliquid perspiciatis hic nobis, totam
            inventore repellendus! Doloremque, earum!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptatibus provident eos repellendus, pariatur, laboriosam blanditiis qui quidem nam reiciendis dolorem tempora debitis et quia soluta adipisci sunt ut illum!</p>
          <p>Soluta assumenda, unde incidunt atque expedita enim doloribus ut beatae dolorum explicabo reiciendis inventore delectus ipsam voluptas corrupti consequuntur dolores ratione, laborum, quaerat veniam. Molestiae dolorem impedit aliquam error porro.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde eveniet nihil fugit rem esse omnis perferendis, deserunt eligendi, accusantium praesentium officiis asperiores quibusdam qui, accusamus suscipit nostrum atque! Debitis.</p>
          <p>Iure amet dolorem placeat repudiandae sunt facere assumenda consectetur ea dolores incidunt quos exercitationem, tempore tenetur quod quidem expedita eos dolore laborum, inventore accusantium earum nobis architecto enim. Mollitia, minima.</p>
          <p>Dolore, nemo odit? Itaque necessitatibus id nam nostrum natus similique dolor inventore explicabo eius cupiditate. Sit earum sed magni culpa? Tempore provident labore enim, culpa molestiae adipisci voluptatem reiciendis doloribus?</p>
          <p>Fugit culpa deserunt esse atque praesentium voluptates sint vitae alias! Molestiae molestias praesentium maxime laboriosam cupiditate voluptatem quo saepe labore nobis corporis odit, voluptatibus eveniet quaerat, eaque vitae cumque velit.</p>
          <p>Fuga, dignissimos officia ducimus, impedit aliquam quia eaque, earum animi reprehenderit commodi mollitia dolores ratione dolore explicabo magni adipisci. Totam id reiciendis iste! Facilis at repellendus quae corrupti molestias laborum?</p>
          <p>Doloribus quisquam sed quis quo? Similique, aspernatur? Aut quis consequuntur facere impedit alias repellendus libero earum sapiente possimus cupiditate dolorem eligendi, esse nesciunt. Saepe eveniet voluptatibus libero, alias autem error.</p>
          <p>A delectus beatae consequuntur eveniet nostrum, totam maxime, ipsum quo ipsa suscipit quam ipsam eum qui explicabo esse quaerat ratione repellat sapiente dolore temporibus, quae unde officiis. Sapiente, aspernatur nulla?</p>
          <p>Dolore enim provident, magni iste reprehenderit ad quo omnis voluptas asperiores itaque a necessitatibus corporis adipisci, velit quas ea voluptatibus temporibus architecto. Adipisci deleniti fugiat perspiciatis rerum illum! Accusantium, provident?</p>
          <p>Iure odio consequatur, doloribus dicta natus perferendis fugit quam vel suscipit dignissimos voluptate quibusdam expedita animi magnam, ad ab nam labore ut! Ullam alias odit eius! Tempore eveniet sunt nemo.</p>
          <p>Asperiores ab eligendi quibusdam sapiente commodi quo aut autem. Nobis in a excepturi nostrum quod cumque cupiditate. Ipsa qui, delectus architecto unde possimus minima consequatur quibusdam harum deserunt quis dignissimos.</p>
          <p>Tenetur ducimus ipsam nam harum, ad tempora exercitationem debitis sequi quisquam vel maxime nisi rem eaque natus quas modi molestias esse quasi voluptatum quidem eius quia distinctio. Soluta, recusandae assumenda.</p>
        </article>
      </Container>
    </Layout>
  );
}
