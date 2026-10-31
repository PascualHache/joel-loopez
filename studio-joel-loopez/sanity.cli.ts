import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {projectId: 'cabiyw63', dataset: 'production'},
  deployment: {
    // appId: '...', // lo imprime el primer `npx sanity deploy`; pégalo aquí
    autoUpdates: true,
  },
})
