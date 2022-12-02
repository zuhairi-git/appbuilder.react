import React from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'

export function AppNewItem() {
  return (
    <div className="row mb-4">
      <div className="col-md-auto text-center">
        <div className="vstack mb-3">
          <label>Item Icon</label>
          <i className="fa fa-right-from-bracket fs-2x mt-2"></i>
        </div>
      </div>
      <div className="col-md-auto">
        <div className="vstack mb-3">
          <label>Item Name</label>
          <input type="text" className="form-control" placeholder="Item Name" control-id="ControlID-21" />
        </div>
      </div>
      <div className="col-md-auto">
        <div className="vstack mb-3">
          <label>Item ID</label>
          <input type="text" className="form-control" placeholder="Item ID" control-id="ControlID-22" />
        </div>
      </div>
      <div className="col-md-auto">
        <div className="vstack mb-3">
          <label>Function Type</label>
          <select className="form-select form-select-solid" aria-label="Select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="col-md-auto">
        <div className="vstack mb-3">
          <label>Visibility</label>
          <select className="form-select form-select-solid" aria-label="Select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="col">
        {/* begin::Menu */}
        <div className="my-0 float-end">
          <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" control-id="ControlID-24">
            {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
            <span className="svg-icon svg-icon-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
                  <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                  <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                  <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                </g>
              </svg>
            </span>
            {/* end::Svg Icon */}
          </button>
          {/* begin::Menu 2 */}
          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Add New Item</div>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className="separator mb-3 opacity-75"></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3 text-danger">Delete Item</a>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu 2 */}
        </div>
        {/* end::Menu */}
      </div>
    </div>
  )
}

