import React from 'react'
import { AppDefine } from './AppDefine'
import { AppDesign } from './AppDesign'
import { TopCard } from './TopCard'

export function ProjectHome() {
  return (
    <>
      <div className="card mb-6 mb-xl-9">
        <div className="card-body pt-9 pb-0">
          <TopCard />
          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
            <li className="nav-item">
              <a
                className="nav-link text-active-primary py-5 me-6 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1"
              >
                Define
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#kt_tab_pane_2"
              >
                Design
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#kt_tab_pane_3"
              >
                Distribute
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade active show"
          id="kt_tab_pane_1"
          role="tabpanel"
        >
          <AppDefine />
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
          <AppDesign />
        </div>
      </div>
    </>
  )
}

