// pages/api/revalidate.js

import type { NextApiRequest, NextApiResponse } from 'next'

const validTypes = {
  page: '',
  post: '/blog',
  gallery: '/gallery',
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  if (!req.body) {
    return res.status(422).json({ message: 'Invalid request body' })
  }

  const { type, slug } = req.body.data

  const isHome = type === 'page' && slug === 'home'
  const validPath = validTypes[type as keyof typeof validTypes]

  try {
    if (isHome) {
      await res.revalidate('/')
    } else {
      await Promise.all([
        // Revalidate the home page
        res.revalidate(`${validPath}/${slug}`),
        res.revalidate(`${validPath}`),
      ])
    }

    return res.status(200).json({ revalidated: true })
  } catch (err) {
    return res.status(500).send({ err })
  }
}
