import React from 'react'

export function AppDesign() {
  return (
    <>
      <div className="card shadow-sm mb-5" id='app-design'>
        <div className="card-header collapsible cursor-pointer rotate" data-bs-toggle="collapse" data-bs-target="#nav">
          <h3 className="card-title">Navigations</h3>
          <div className="card-toolbar rotate-180">
            <span className="svg-icon svg-icon-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor"></path>
              </svg>
            </span>
          </div>
        </div>
        <div id="nav" className="collapse show">
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-md-auto text-center">
                <div className="vstack mb-3">
                  <label>Item Icon</label>
                  <i className="fa fa-layer-group fs-2x mt-2"></i>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Item Name</label>
                  <input type="text" className="form-control" placeholder="Item Name" control-id="ControlID-1" />
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Item ID</label>
                  <input type="text" className="form-control" placeholder="Item ID" control-id="ControlID-2" />
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Function Type</label>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Visibility</label>
                </div>
              </div>
              <div className="col">
                {/* begin::Menu */}
                <div className="my-0 float-end">
                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" control-id="ControlID-4">
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
          </div>
        </div>
      </div>
      <div className="card shadow-sm mb-5">
        <div className="card-header collapsible cursor-pointer rotate" data-bs-toggle="collapse" data-bs-target="#homescreen">
          <h3 className="card-title">Home Screen</h3>
          <div className="card-toolbar rotate-180">
            <span className="svg-icon svg-icon-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor"></path>
              </svg>
            </span>
          </div>
        </div>
        <div id="homescreen" className="collapse show">
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-md-auto text-center">
                <div className="vstack mb-3">
                  <label>Item Icon</label>
                  <i className="fa fa-inbox fs-2x mt-2"></i>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Item Name</label>
                  <input type="text" className="form-control" placeholder="Item Name" control-id="ControlID-5" />
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Item ID</label>
                  <input type="text" className="form-control" placeholder="Item ID" control-id="ControlID-6" />
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Function Type</label>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Visibility</label>
                </div>
              </div>

              <div className="col">
                {/* begin::Menu */}
                <div className="my-0 float-end">
                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" control-id="ControlID-8">
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
            <div className="separator mt-3 mb-3"></div>
            <div className="row mb-4">
              <div className="col-md-auto text-center">
                <div className="vstack mb-3">
                  <label>Item Icon</label>
                  <i className="fa fa-message fs-2x mt-2"></i>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Item Name</label>
                  <input type="text" className="form-control" placeholder="Item Name" control-id="ControlID-9" />
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Item ID</label>
                  <input type="text" className="form-control" placeholder="Item ID" control-id="ControlID-10" />
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Function Type</label>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Visibility</label>
                </div>
              </div>

              <div className="col">
                {/* begin::Menu */}
                <div className="my-0 float-end">
                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" control-id="ControlID-12">
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
            <div className="separator mt-3 mb-3"></div>
            <div className="row mb-4">
              <div className="col-md-auto text-center">
                <div className="vstack mb-3">
                  <label>Item Icon</label>
                  <i className="fa fa-envelope-circle-check fs-2x mt-2"></i>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Item Name</label>
                  <input type="text" className="form-control" placeholder="Item Name" control-id="ControlID-13" />
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Item ID</label>
                  <input type="text" className="form-control" placeholder="Item ID" control-id="ControlID-14" />
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Function Type</label>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Visibility</label>
                </div>
              </div>

              <div className="col">
                {/* begin::Menu */}
                <div className="my-0 float-end">
                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" control-id="ControlID-16">
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

          </div>
        </div>
      </div>
      <div className="card shadow-sm mb-5">
        <div className="card-header collapsible cursor-pointer rotate" data-bs-toggle="collapse" data-bs-target="#qaccess">
          <h3 className="card-title">Quick Access</h3>
          <div className="card-toolbar rotate-180">
            <span className="svg-icon svg-icon-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor"></path>
              </svg>
            </span>
          </div>
        </div>
        <div id="qaccess" className="collapse show">
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-md-auto text-center">
                <div className="vstack mb-3">
                  <label>Item Icon</label>
                  <i className="fa fa-book fs-2x mt-2"></i>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Item Name</label>
                  <input type="text" className="form-control" placeholder="Item Name" control-id="ControlID-17" />
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Item ID</label>
                  <input type="text" className="form-control" placeholder="Item ID" control-id="ControlID-18" />
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Function Type</label>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Visibility</label>
                </div>
              </div>

              <div className="col">
                {/* begin::Menu */}
                <div className="my-0 float-end">
                  <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" control-id="ControlID-20">
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
          </div>
        </div>
      </div>
      <div className="card shadow-sm mb-5">
        <div className="card-header collapsible cursor-pointer rotate" data-bs-toggle="collapse" data-bs-target="#reusable">
          <h3 className="card-title">Reusable Components</h3>
          <div className="card-toolbar rotate-180">
            <span className="svg-icon svg-icon-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor"></rect>
                <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor"></path>
              </svg>
            </span>
          </div>
        </div>
        <div id="reusable" className="collapse show">
          <div className="card-body">
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
                </div>
              </div>
              <div className="col-md-auto">
                <div className="vstack mb-3">
                  <label>Visibility</label>
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
          </div>
        </div>
      </div>
    </>
  )
}

