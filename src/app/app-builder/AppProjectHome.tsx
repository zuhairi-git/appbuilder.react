import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import { PageLink, PageTitle } from '../../_metronic/layout/core'
import { AppDefine } from './AppDefine'
import { AppDesign } from './AppDesign'
import { AppProjectHomeHeader } from './AppProjectHomeHeader'

const AppProjectHomeBreadCrumbs: Array<PageLink> = [
  {
    title: 'Projects',
    path: '/app-define',
    isSeparator: false,
    isActive: true,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

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
        path='/app-define'
        element={
          <>
            <PageTitle breadcrumbs={AppProjectHomeBreadCrumbs}>Define</PageTitle>
            <AppDefine />
          </>
        }
      />
      <Route index element={<Navigate to='/app-define' />} />

      <Route
        path='/app-design'
        element={
          <>
            <PageTitle breadcrumbs={AppProjectHomeBreadCrumbs}>Design</PageTitle>
            <AppDesign />
          </>
        }
      />
      <Route index element={<Navigate to='/app-design' />} />

    </Route>
  </Routes>
)

export { AppProjectHome }
