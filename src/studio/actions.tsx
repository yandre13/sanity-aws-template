import { useEffect, useState } from 'react'

import {
  DocumentActionComponent,
  DocumentActionProps,
  SanityDocument,
  useDocumentOperation,
} from 'sanity'

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
async function revalidate({ type, document }: RevalidateProps) {
  const res = await callRevalidate({
    type,
    document,
  })
  console.log('res', res)
}

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
      console.log('res', res)
      window.alert('Page revalidated! ✅')
    },
  }
}

export function PublishAndRevalidateAction(
  originalPublishAction: DocumentActionComponent,
) {
  const ImprovedAction = (props: DocumentActionProps) => {
    const { patch, publish } = useDocumentOperation(props.id, props.type)
    const originalResult = originalPublishAction(props)
    const [isPublishing, setIsPublishing] = useState(false)

    useEffect(() => {
      if (isPublishing && !props.draft) {
        revalidate({ type: props.type, document: props.published })
        setIsPublishing(false)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.draft])

    return {
      ...originalResult,
      onHandle: () => {
        setIsPublishing(true)
        // Set publishedAt to current date and time
        patch.execute([{ set: { publishedAt: new Date().toISOString() } }])

        // Perform the publish
        publish.execute()

        // props.onComplete()
      },
    }
  }
  return ImprovedAction
}

export function UnpublishAndRevalidateAction(
  originalUnpublishAction: DocumentActionComponent,
) {
  const ImprovedAction = (props: DocumentActionProps) => {
    const originalResult = originalUnpublishAction(props)

    useEffect(() => {
      if (props.draft && !props.published) {
        revalidate({ type: props.type, document: props.published })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.draft])

    return {
      ...originalResult,
    }
  }
  return ImprovedAction
}
