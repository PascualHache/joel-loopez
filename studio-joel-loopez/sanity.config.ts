import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {esESLocale} from '@sanity/locale-es-es'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Web de Joel Loopez',
  projectId: 'cabiyw63',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Contenido')
          .items([orderableDocumentListDeskItem({type: 'cancion', title: 'Canciones', S, context})]),
    }),
    esESLocale(),
  ],
  schema: {types: schemaTypes},
})
