import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { dataset, projectId } from '@/lib/sanity.client'
import { schemaTypes } from './schemas'
import { mySanityTheme } from './theme'
import Logo from './components/Logo'
import StudioNavbar from './components/StudioNavbar'
import { getDefaultDocumentNode } from './structure'
import { RevalidateDocumentAction } from './actions'

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
  document: {
    actions: [RevalidateDocumentAction],
  },
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
