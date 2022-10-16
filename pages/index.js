import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Articles from 'components/Articles'


const Container = styled.div`
  padding: 0 2rem;
`

const Main = styled.main`
  background-color: white;
  color: blue;
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

const Footer = styled.footer`
  background-color: gray;
  a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  }
  `

export default function Home(props) {
  return (
    <Container>
      <Head>
        <title>Space</title>
        <meta name="description" content="Space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        < Articles data={props.data} />
      </Main>

      <Footer>
        Footer
      </Footer>
    </Container>
  )
}

// SSR, must be called in page, proopagated further via props
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/articles');
  const data = await res.json();

  console.log(data);

  return { props: { data }}
}