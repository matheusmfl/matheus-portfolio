import { getProjects } from '../../../sanity/sanity-utils'

export default async function handler(req, res) {
  try {
    const documents = await getProjects()
    res.status(200).json(documents)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: 'Ocorreu um erro ao buscar os documentos do Sanity.' })
  }
}
