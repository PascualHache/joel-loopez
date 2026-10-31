import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const cancion = defineType({
  name: 'cancion',
  title: 'Canción',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'enlace',
      title: 'Enlace',
      type: 'url',
      description: 'Pega el enlace completo de Spotify, YouTube, SoundCloud…',
      validation: (rule) => rule.required().uri({scheme: ['https']}),
    }),
    defineField({
      name: 'portada',
      title: 'Portada',
      type: 'image',
      description:
        'Mejor cuadrada y de al menos 800 × 800 px. Con el icono de recorte puedes marcar la parte importante de la imagen.',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    orderRankField({type: 'cancion', newItemPosition: 'before'}),
  ],
  preview: {
    select: {title: 'titulo', subtitle: 'enlace', media: 'portada'},
  },
})
