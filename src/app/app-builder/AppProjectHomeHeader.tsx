/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTSVG, toAbsoluteUrl } from '../../_metronic/helpers'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { AppDefine } from './AppDefine'
import { TopCard } from './TopCard'

const AppProjectHomeHeader: React.FC = () => {
  const location = useLocation()

  return (
    <div>
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <TopCard />
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/app-define' && 'active')
                  }
                  to='/app-define'
                >
                  Define
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <AppDefine />

    </div>

  )
}

export { AppProjectHomeHeader }
