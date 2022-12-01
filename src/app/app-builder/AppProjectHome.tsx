import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import { PageLink, PageTitle } from '../../_metronic/layout/core'
import { AppDefine } from './AppDefine'
import { AppProjectHomeHeader } from './AppProjectHomeHeader'

const AppProjectHome = () => (
  <Routes>
    <Route
      element={
        <>
          <AppProjectHomeHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='app-define'
        element={
          <>
            <PageTitle>Define</PageTitle>
            <AppDefine />
          </>
        }
      />
      <Route index element={<Navigate to='app-define' />} />
    </Route>
  </Routes>
)

export { AppProjectHome }
