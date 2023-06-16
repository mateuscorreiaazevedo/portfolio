import { prismaDb } from '@/main/config'
import { service, tokenHelper } from '@/modules/core'

const authToken = tokenHelper.get()

class SkillService {
  async createSkill (data: SkillForm) {
    const response = await service.request<{ message: string; error?: string }>({
      url: '/skills/new',
      method: 'post',
      data,
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

  async getAllSkills (): Promise<Skill[] | undefined> {
    const data = await prismaDb?.skill.findMany({ orderBy: { level: 'asc' } })

    const skills = data?.map(item => ({
      ...item,
      createdAt: item.createdAt.toISOString()
    })) as Skill[] | undefined

    return skills
  }
}

export const skillService = new SkillService()
