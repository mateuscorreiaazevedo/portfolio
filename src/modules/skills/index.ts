import { lazy } from 'react'

export * from './service/skill-service'

export const Skills = lazy(() => import('./components/skills'))
