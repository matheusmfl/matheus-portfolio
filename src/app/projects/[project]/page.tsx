import { getProject } from '../../../../sanity/sanity-utils'
type Props = {
  params: { project: string }
}
export default async function Project({ params }: Props) {
  const slug = params.project

  const project = await getProject(slug)

  console.log(project + 'ola')

  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex justify-between items-center ">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 drop-shadow to-purple-600 bg-clip-text text-transparent text-7xl font-extrabold">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="Ver projeto"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-ping-500 hover:text-gray-100 transition"
        >
          Ver Projeto
        </a>
      </header>

      {/* content vem aqui */}
      <div>{project.content}</div>

      {/* imagem vem aqui */}
    </div>
  )
}
