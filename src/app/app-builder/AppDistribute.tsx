import React from 'react'

export function AppDistribute() {
  return (
    <>
      <div className="row g-5 g-xl-8" id="distribute">
        <div className="col-xl-6">
          {/* begin::List Widget 1 */}
          <div className="card card-xl-stretch mb-xl-8">
            <div className="card-header">
              <h3 className="card-title">Details</h3>
            </div>
            {/* begin::Body */}
            <div className="card-body pt-5">
              <label className="form-label">Choose a Platform</label>
              <div className="vstack mb-3">
                <label>Platform</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>Select Your Platform</option>
                  <option value="1">Android</option>
                  <option value="2">iOS</option>
                  <option value="3">Web</option>
                </select>
              </div>

              <div className="vstack mb-3">
                <label>Version</label>
                <select className="form-select form-select-solid" aria-label="Select example">
                  <option>Select Your Version</option>
                  <option value="1">v8.210911</option>
                  <option value="2">v7.210806</option>
                </select>
              </div>

              <div className="d-block mb-20 mt-10">
                <a href="#" className="btn btn-success float-start">Download</a>
                <a href="#" className="btn btn-warning float-end">Recompile</a>
              </div>
            </div>
          </div>
        </div>

        {/* start::Barcode */}
        <div className="col-xl-6">
          <div className="card card-xl-stretch mb-xl-8">
            <div className="card-header">
              <h3 className="card-title">Barcode</h3>
              <span className="card-title btn btn-light-primary fw-bold"><i className="fa fa-print fa-xl"></i></span>
            </div>
            {/* begin::Body */}
            <div className="card-body pt-5">
              <label className="form-label">Barcode</label>
              <span className="text-muted fw-semibold d-block fs-7 mb-5">iOS or Android will be detected automatically.</span>
              <div className="mb-10"></div>
              <div className="text-center">
                <img className="w-300px h-300px bg-white rounded rounded-4 border p-5" src="./media/svg/centerux-barcode.svg" alt="barcode" />
              </div>

            </div>
          </div>
        </div>
        {/* end::Barcode */}

        {/* start::Send */}
        <div className="col-xl-6">
          <div className="card card-xl-stretch mb-xl-8">
            <div className="card-header">
              <h3 className="card-title">Send</h3>
            </div>
            {/* begin::Body */}
            <div className="card-body pt-5">
              <span className="text-muted fw-semibold d-block fs-7 mb-5">Send a link / bardcode to emails or via SMS</span>
              <div className="form-floating mb-5">
                <input type="email" className="form-control" id="floatingInputValue" placeholder="name@example.com" value="" control-id="ControlID-1" />
                <label htmlFor="floatingInputValue">Email</label>
              </div>
              <div className="form-floating mb-5">
                <input type="phone" className="form-control" id="floatingInputValue" placeholder="+35899999999999" value="" control-id="ControlID-2" />
                <label htmlFor="floatingInputValue">Phone Number</label>
              </div>
            </div>
          </div>
        </div>
        {/* end::Send */}

        {/* end::Row */}

        {/* end::Card */}
      </div>
    </>
  )
}

