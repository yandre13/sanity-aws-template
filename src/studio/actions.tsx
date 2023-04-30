import type { DocumentActionProps, SanityDocument } from 'sanity'

type RevalidateProps = {
  type: string
  document: SanityDocument | null
}
async function callRevalidate({ type, document }: RevalidateProps) {
  try {
    const res = await fetch(
      `/api/revalidate?secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            type,
            // @ts-ignore
            slug: document?.slug?.current,
          },
        }),
      },
    )
    const data = await res.json()
    return data
  } catch (err) {
    console.log('err', err)
    return err
  }
}
// async function revalidate({ type, document }: RevalidateProps) {
//   const res = await callRevalidate({
//     type,
//     document,
//   })
//   console.log('res', res)
// }

export function RevalidateDocumentAction({
  type,
  published,
}: DocumentActionProps) {
  if (type !== 'post' && type !== 'page') {
    return null
  }
  return {
    label: 'Revalidate',
    onHandle: async () => {
      // Here you can perform your actions
      const res = await callRevalidate({ type, document: published })
      console.log('Page revalidated! ✅')
      console.log({ res })
      // window.alert('Page revalidated! ✅')
    },
  }
}
