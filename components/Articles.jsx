// Articles component
import styled from 'styled-components'

const Article = styled.div`
padding: 10px;
`

export default function Articles(props) {

    const articles = props.data.map((article, index) => {
        return <Article key={index}>{article.name}</Article>
    });

    return (
        <div>
            {articles}
        </div>
    )
}