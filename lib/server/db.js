import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.POSTGRES);
const client = postgres(process.env.POSTGRES);
console.log(client);

async function getArticles(limit) {
  const articles = await client`
    select id, name from articles limit ${limit}`;
  return articles;
}

async function getArticle(id) {
  const articles = await client`
    select id, name, content from articles where id = ${id}`;
  return articles;
}

export { getArticles, getArticle };
