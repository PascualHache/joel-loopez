import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

/**
 * Songs are edited by the client in Sanity Studio (studio-joel-loopez/) and
 * read here from the public API CDN, so their changes go live without a deploy.
 */
const config = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET ?? 'production',
}

const sanity = createClient({ ...config, apiVersion: '2026-10-01', useCdn: true })
const builder = createImageUrlBuilder(config)

const QUERY = `*[_type == "cancion" && defined(portada.asset)] | order(orderRank) {
  _id,
  titulo,
  enlace,
  portada,
  "color": portada.asset->metadata.palette.dominant.background
}`

export function getCanciones() {
  return sanity.fetch(QUERY)
}

export function portadaUrl(imagen, ancho) {
  return builder.image(imagen).width(ancho).height(ancho).fit('crop').auto('format').quality(80).url()
}

export function portadaSrcSet(imagen, anchos = [400, 800]) {
  return anchos.map((w) => `${portadaUrl(imagen, w)} ${w}w`).join(', ')
}
