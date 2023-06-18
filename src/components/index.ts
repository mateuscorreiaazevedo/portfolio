import { lazy } from 'react'

export const OrbitalSphere = lazy(() => import('./orbital-sphere/orbital-sphere'))
export const Spinner = lazy(() => import('./spinner/spinner'))

export const Sidebar = lazy(() => import('./navbar/sidebar'))
export const Header = lazy(() => import('./navbar/header'))

export const Contact = lazy(() => import('./contact/contact'))
export const MainPage = lazy(() => import('./main/main-page'))
export const Home = lazy(() => import('./home/home'))
