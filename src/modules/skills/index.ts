import { lazy } from 'react'

export * from './service/skill-service'

export const SkillForm = lazy(() => import('./components/new-skill-form'))
export const Skills = lazy(() => import('./components/skills'))
