/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Card1} from '../../../../../_metronic/partials/content/cards/Card1'

const Drawer: FC = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          My Contacts
          <span className='fs-6 text-gray-400 fw-bold ms-1'>(59)</span>
        </h3>

        <div className='d-flex my-2'>
          <select
            name='status'
            data-control='select2'
            data-hide-search='true'
            className='form-select form-select-white form-select-sm w-125px'
            defaultValue='Online'
          >
            <option value='Online'>Online</option>
            <option value='Pending'>Pending</option>
            <option value='Declined'>Declined</option>
            <option value='Accepted'>Accepted</option>
          </select>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            avatar='/media/avatars/ali.jpg'
            name='Ali Zuhairi'
            job='Art Director'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            color='danger'
            name='Ali Zuhairi'
            job='Product Owner'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            avatar='/media/avatars/ali.jpg'
            name='Ali Zuhairi'
            job='React JS, Senior UI/UX/Product Designer'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            avatar='/media/avatars/ali.jpg'
            name='Ali Zuhairi'
            job='Web Developer'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            avatar='/media/avatars/ali.jpg'
            name='Ali Zuhairi'
            job='UI/UX Designer'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            color='warning'
            name='Ali Zuhairi'
            job='Product Owner'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            avatar='/media/avatars/ali.jpg'
            name='Ali Zuhairi'
            job='Product Owner'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            color='danger'
            name='Ali Zuhairi'
            job='System Admin'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            color='primary'
            name='Ali Zuhairi'
            job='Account Manager'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            avatar='/media/avatars/ali.jpg'
            name='Ali Zuhairi'
            job='Web Desinger'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            color='danger'
            name='Ali Zuhairi'
            job='Product Owner'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
            online={true}
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card1
            avatar='/media/avatars/ali.jpg'
            name='Ali Zuhairi'
            job='Customer Relationship'
            avgEarnings='$14,560'
            totalEarnings='$236,400'
          />
        </div>
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export {Drawer}
