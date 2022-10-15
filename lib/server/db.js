import postgres from 'postgres'
import dotenv from 'dotenv'

dotenv.config();
console.log(process.env.POSTGRES)
const client = postgres(process.env.POSTGRES)
console.log(client);


async function getArticles(limit) {
    const articles = await client`
    select id, name, content from articles limit ${limit}`
    return articles
}


export { getArticles }
