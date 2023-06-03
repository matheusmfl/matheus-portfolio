import Image from 'next/image'

import { PortableText } from '@portabletext/react'
import { getProject } from '../../../../../sanity/sanity-utils'

type Props = {
  params: { project: string }
}
export default async function Project({ params }: Props) {
  const slug = params.project

  const project = await getProject(slug)

  console.log(project + 'ola')

  return (
    <div>
      <header className="flex justify-between items-center ">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 drop-shadow to-purple-600 bg-clip-text text-transparent text-7xl font-extrabold">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="Ver projeto"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 cursor-pointer hover:text-gray-100 transition"
        >
          Ver Projeto
        </a>
      </header>

      {/* content vem aqui */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content as any} />
      </div>

      {/* imagem vem aqui */}
      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      )}
    </div>
  )
}
