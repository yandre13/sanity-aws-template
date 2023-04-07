import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { dataset, projectId } from '@/lib/sanity.client'
import { schemaTypes } from './schemas'
import { mySanityTheme } from './theme'
import Logo from './components/Logo'
import StudioNavbar from './components/StudioNavbar'
import { getDefaultDocumentNode } from './structure'

export default defineConfig({
  basePath: '/studio',
  name: 'My_Sanity_Studio',
  title: 'My Sanity Studio',
  projectId,
  dataset,
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
  ],
  // document: {
  //   // @ts-ignore
  //   actions: (prev) => {
  //     const newActions = prev.map((originalAction) => {
  //       if (originalAction.action === 'publish') {
  //         return PublishAndRevalidateAction(originalAction)
  //       }
  //       if (originalAction.action === 'unpublish') {
  //         return UnpublishAndRevalidateAction(originalAction)
  //       }
  //       return originalAction
  //     })

  //     return [...newActions, RevalidateDocumentAction]
  //   },
  // },
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: mySanityTheme,
})
