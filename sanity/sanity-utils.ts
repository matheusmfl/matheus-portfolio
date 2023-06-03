import { createClient, groq } from 'next-sanity'

export async function getProjects() {
  const client = createClient({
    projectId: 'zq1oek0g',
    dataset: 'production',
    apiVersion: '2023-03-06',
  })

  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      _createdAt,

      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
  )
}
