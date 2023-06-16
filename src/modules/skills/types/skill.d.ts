interface SkillForm {
  title: string
  level: number
  imageUrl: string
}

interface Skill {
  title: string
  level: number
  imageUrl: string
  id: string
  createdAt: string
  userId?: string
}
