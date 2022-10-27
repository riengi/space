import Post from "components/Post";

export default function PostPage(props) {
  return <Post data={props.data} />;
}

// SSR, must be called in page, proopagated further via props
export async function getServerSideProps(context) {
  console.log("context:", context.query);
  const { id } = context.query;
  const res = await fetch("http://localhost:3000/api/article/" + id);
  const data = await res.json();

  console.log(data);

  return { props: { data: data[0] } };
}
