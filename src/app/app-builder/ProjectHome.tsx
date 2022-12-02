import React from 'react'
import { AppDefine } from './AppDefine'
import { AppDesign } from './AppDesign'
import { AppDistribute } from './AppDistribute'
import { AppFlow } from './AppFlow'
import { AppProjectHome } from './AppProjectHome'
import { AppPrototype } from './AppPrototype'
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
                href="#define"
              >
                Define
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#design"
              >
                Design
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#distribute"
              >
                Distribute
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#prototype"
              >
                Prototype
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#flow"
              >
                Flow
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade active show" id="define" role="tabpanel">
          <AppDefine />
        </div>
        <div className="tab-pane fade" id="design" role="tabpanel">
          <AppDesign />
        </div>
        <div className="tab-pane fade" id="distribute" role="tabpanel">
          <AppDistribute />
        </div>
        <div className="tab-pane fade" id="prototype" role="tabpanel">
          <AppPrototype />
        </div>
        <div className="tab-pane fade" id="flow" role="tabpanel">
          <AppFlow />
        </div>
      </div>
    </>
  )
}

