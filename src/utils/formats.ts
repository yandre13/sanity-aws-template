// format date to Month DD, YYYY

export const formatDate = (date: string) => {
  const newDate = new Date(date)
  const month = newDate.toLocaleString('default', { month: 'long' })
  const day = newDate.getDate()
  const year = newDate.getFullYear()

  return `${month} ${day}, ${year}`
}

// if url has local domain so is not external and return the url without the domain ex: /about

export const formatLocalUrl = (url: string) => {
  const localDomain =
    process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://localhost:3000'
  const isLocal = url.includes(localDomain)

  if (isLocal) {
    return url.replace(localDomain, '')
  }

  return url
}
