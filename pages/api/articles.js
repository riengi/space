// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {getArticles} from 'lib/server/db'

export default async function handler(req, res) {
  res.status(200).json(await getArticles(10));
}






