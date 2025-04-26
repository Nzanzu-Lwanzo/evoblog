import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/__global__/header'
import Footer from '../components/__global__/footer'
// import FilterAndSearch from '../components/__global__/filterAndSearch'
import { AppContextProvider } from '../contexts/AppContext'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <AppContextProvider>
        <Header />
        <Outlet />
        <Footer />
        {/* <FilterAndSearch /> */}
      </AppContextProvider>
    </React.Fragment>
  )
}
