import Head from 'next/head'

import { Container } from './../styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>PEBMED Checkout</title>
      </Head>
        <img src="/logo.png" alt=""/>
        <h1>Hello World</h1>
    </Container>
  )
}
