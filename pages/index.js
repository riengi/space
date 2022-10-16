import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Articles from 'components/Articles'
import Header from 'components/Header'
import Footer from 'components/Footer'


const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
`

const CItem = styled.div`
  padding: 10px;
  margin: 10px
`

export default function Home(props) {
  return (
    <Container>
      <Head>
        <title>Space</title>
        <meta name="description" content="Space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CItem>
        <Header />
      </CItem>

      <CItem>
        < Articles data={props.data} />
      </CItem>

      <CItem>
        <Footer />
      </CItem>
    </Container>
  )
}

// SSR, must be called in page, proopagated further via props
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/articles');
  const data = await res.json();

  console.log(data);

  return { props: { data } }
}