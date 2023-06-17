import { prismaDb } from '@/main/config'
import { service, tokenHelper } from '@/modules/core'

const authToken = tokenHelper.get()

class ProjectService {
  async postProject(data: ProjectForm) {
    const response = await service.request<{ message: string; error?: string }>({
      url: '/projects/new',
      data,
      method: 'post',
      headers: {
        Authorization: `Bearer ${authToken!}`
      }
    })

    switch (response.statusCode) {
      case 201:
        return response.body.message
      case 401:
        throw new Error(response.body.error)
      case 422:
        throw new Error(response.body.error)
      default:
        throw new Error('Erro inesperado. Por favor, tente novamente mais tarde.')
    }
  }

  async getAllProjects(): Promise<Project[] | undefined> {
    const data = await prismaDb?.project.findMany({ orderBy: { createdAt: 'asc' } })

    const projects = data?.map(item => ({
      ...item,
      imageUrl: item.imageUrl[0],
      createdAt: item.createdAt.toISOString()
    })) as Project[] | undefined

    return projects
  }
}

export const projectService = new ProjectService()
