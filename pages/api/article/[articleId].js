// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {getArticle} from 'lib/server/db'

export default async function handler(req, res) {

  const {articleId} = req.query;
  console.log('id:', articleId)

  res.status(200).json(await getArticle(articleId));

  
}




