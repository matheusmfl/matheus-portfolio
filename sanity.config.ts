'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import project from './sanity/schema/project-schema'
import page from './sanity/schema/page-schema'

const config = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Matheus Fonteles Dev',
  // Add and edit the content schema in the './sanity/schema' folder
  schema: { types: [project, page] },
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})

export default config
