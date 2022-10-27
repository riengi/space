import styled from 'styled-components';
import Link from 'next/link'

const Header = styled.header`
background-color: darkmagenta;
font-size: 24px;
color: white;
padding: 10px;
border-radius: 2px;
`

export default () => {
    return <Link href="/"><Header>Space</Header></Link>
}