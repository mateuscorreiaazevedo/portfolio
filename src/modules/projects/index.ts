import { lazy } from 'react'

export * from './components/new-project-form'
export * from './service/project-service'

export const Projects = lazy(() => import('./components/projects'))
