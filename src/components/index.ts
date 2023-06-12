import { lazy } from 'react'

export const Sidebar = lazy(() => import('./navbar/sidebar'))
export const Header = lazy(() => import('./navbar/header'))

export const Home = lazy(() => import('./home/home'))
