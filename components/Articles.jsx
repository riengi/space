// Articles component
import styled from "styled-components";
import Link from "next/link";

const Article = styled.div`
  padding: 10px;
  &:hover {
    color: darkmagenta;
  }
`;

const ROUTE_POST_ID = "post/[id]";

export default function Articles(props) {
  const articles = props.data.map((article, index) => {
    return (
      <Link
        key={index}
        href={{
          pathname: ROUTE_POST_ID,
          query: { id: article.id },
        }}
      >
        <Article key={index}>{article.name}</Article>
      </Link>
    );
  });

  return <div>{articles}</div>;
}
