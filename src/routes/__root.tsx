import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/__global__/header'
import Footer from '../components/__global__/footer'
// import FilterAndSearch from '../components/__global__/filterAndSearch'
import { AppContextProvider } from '../contexts/AppContext'
import ToastMessage from '../components/__global__/ToastMessage'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export const Route = createRootRoute({
  component: RootComponent,
})

const client = new QueryClient()

function RootComponent() {
  return (
    <QueryClientProvider client={client}>
      <React.Fragment>
        <AppContextProvider>
          <Header />
          <Outlet />
          <Footer />
          {/* <FilterAndSearch /> */}
        </AppContextProvider>
        <ToastMessage />
      </React.Fragment>
    </QueryClientProvider>
  )
}
