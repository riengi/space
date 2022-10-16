// Articles component
import styled from 'styled-components'

const Article = styled.div`
padding: 10px;
`

const ROUTE_POST_ID = "post/[id]"

export default function Post(props) {
    
    return (
        <Article>
        <h3>
            {props.data.name}
        </h3> 
        <div>
            {props.data.content}
        </div>
        </Article>
    )
}