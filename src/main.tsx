import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createRouter,
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './assets/css/global.css'
import './assets/css/theme.css'
import PageNotFound from './components/__global__/erros/404'
import UncaughtError from './components/__global__/erros/uncaught'

const router = createRouter({
  routeTree,
  scrollRestoration: true,
  scrollRestorationBehavior: 'smooth',
  defaultViewTransition: true,
  trailingSlash: 'never',
  defaultNotFoundComponent() {
    return <PageNotFound is='page' />
  },
  defaultErrorComponent(props: { error: Error }) {
    return <>Error : {props.error.message}</>
  },
  defaultOnCatch(error, errorInfo) {
    console.log(error, errorInfo)
    return <UncaughtError />
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}