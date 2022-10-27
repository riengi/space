import Articles from "components/Articles";

export default function Home(props) {
  return <Articles data={props.data} />;
}

// SSR, must be called in page, proopagated further via props
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/articles");
  const data = await res.json();

  console.log(data);

  return { props: { data } };
}
