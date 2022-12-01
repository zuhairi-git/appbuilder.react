import React from 'react'
import { KTSVG, toAbsoluteUrl } from '../../_metronic/helpers'

export function TopCard() {
  return (
    <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
    <div className='me-7 mb-4'>
      <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
        <img src={toAbsoluteUrl('/media/avatars/ali.jpg')} alt='Ali' />
        <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
      </div>
    </div>

    <div className='flex-grow-1'>
      <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
        <div className='d-flex flex-column'>
          <div className='d-flex align-items-center mb-2'>
            <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
              Ali Zuhairi
            </a>
            <a href='#'>
              <KTSVG
                path='/media/icons/duotune/general/gen026.svg'
                className='svg-icon-1 svg-icon-primary'
              />
            </a>
          </div>

          <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
            <a
              href='#'
              className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
            >
              <KTSVG
                path='/media/icons/duotune/communication/com006.svg'
                className='svg-icon-4 me-1'
              />
              Developer
            </a>
            <a
              href='#'
              className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
            >
              <KTSVG
                path='/media/icons/duotune/general/gen018.svg'
                className='svg-icon-4 me-1'
              />
              SF, Bay Area
            </a>
            <a
              href='#'
              className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
            >
              <KTSVG
                path='/media/icons/duotune/communication/com011.svg'
                className='svg-icon-4 me-1'
              />
              ali@appbuilder.cc
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
)
}

