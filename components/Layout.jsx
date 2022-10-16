import Head from 'next/head'
import styled from 'styled-components'
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

export default function Layout({children}) {
  return (
    <>
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
        {children}
      </CItem>

      <CItem>
        <Footer />
      </CItem>
    </Container>
    </>
  )
}
