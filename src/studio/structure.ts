import Iframe from 'sanity-plugin-iframe-pane'
import { DefaultDocumentNodeResolver } from 'sanity/desk'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType },
) => {
  if (schemaType === 'post' || schemaType === 'page') {
    return S.document().views([
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          url: `${
            process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://localhost:3000'
          }/api/preview?secret=${
            process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET
          }`,
          defaultSize: 'desktop',
          reload: {
            button: true,
          },
          loader: true,
          attributes: {},
        })
        .title('Website Preview'),
    ])
  }
}
