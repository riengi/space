// Articles component

export default function Articles(props) {

    const articles = props.data.map((article, index) => {
        return <div key={index}>{article.name}</div>
    });

    return (    
        <div>
            {articles}
        </div>
    )

}