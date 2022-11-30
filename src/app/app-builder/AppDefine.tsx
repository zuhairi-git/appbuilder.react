import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

export function AppDefine() {
  return (
    <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
      <div className="row g-5 g-xl-8">
        <div className="col-xl-4">
          {/*begin::List Widget 1*/}
          <div className="card card-xl-stretch mb-xl-8">
            {/*begin::Header*/}
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-dark">General Info</span>
              </h3>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-5">
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Text*/}
                <div className="d-flex flex-column w-100">
                  <a href="#" className="text-dark text-hover-primary fs-6 fw-bold">App Name</a>
                  <input type="text" className="form-control" placeholder="Smart Banking" control-id="ControlID-1" />
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Text*/}
                <div className="d-flex flex-column w-100">
                  <a href="#" className="text-dark text-hover-primary fs-6 fw-bold">App ID</a>
                  <input type="text" className="form-control" placeholder="com.centerux.samrtbanking" control-id="ControlID-2" />
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Text*/}
                <div className="d-flex flex-column w-100">
                  <a href="#" className="text-dark text-hover-primary fs-6 fw-bold">Description</a>
                  <input type="text" className="form-control" placeholder="Smart Banking for B2C" control-id="ControlID-3" />
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Text*/}
                <div className="d-flex flex-column w-100">
                  <a href="#" className="text-dark text-hover-primary fs-6 fw-bold">Layouts</a>
                  <input type="text" className="form-control" placeholder="Smart Banking" control-id="ControlID-4" />
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::List Widget 1*/}
        </div>
        <div className="col-xl-4">
          {/*begin::List Widget 1*/}
          <div className="card card-xl-stretch mb-xl-8">
            {/*begin::Header*/}
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-dark">Graphics</span>
              </h3>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-5">
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Text*/}
                <div className="d-flex flex-column w-100">
                  <a href="#" className="text-dark text-hover-primary fs-6 fw-bold">Select an Icon</a>
                  {/*begin::Image input*/}
                  <div className="image-input mt-3 image-input-empty w-150px h-150px" data-kt-image-input="true" >
                    {/*begin::Image preview wrapper*/}
                    <div className="image-input-wrapper w-150px h-150px"></div>
                    {/*end::Image preview wrapper*/}

                    {/*begin::Edit button*/}
                    <label className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" data-bs-dismiss="click" aria-label="Change avatar" data-kt-initialized="1" >
                      <i className="bi bi-pencil-fill fs-7"></i>

                      {/*begin::Inputs*/}
                      <input type="file" name="avatar" accept=".png, .jpg, .jpeg" control-id="ControlID-5" />
                      <input type="hidden" name="avatar_remove" />
                      {/*end::Inputs*/}
                    </label>
                    {/*end::Edit button*/}

                    {/*begin::Cancel button*/}
                    <span className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" data-bs-dismiss="click" aria-label="Cancel avatar" data-kt-initialized="1">
                      <i className="bi bi-x fs-2"></i>
                    </span>
                    {/*end::Cancel button*/}

                    {/*begin::Remove button*/}
                    <span className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" data-bs-dismiss="click" aria-label="Remove avatar" data-kt-initialized="1">
                      <i className="bi bi-x fs-2"></i>
                    </span>
                    {/*end::Remove button*/}
                  </div>
                  {/*end::Image input*/}
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Text*/}
                <div className="d-flex flex-column w-100">
                  <a href="#" className="text-dark text-hover-primary fs-6 fw-bold">Select a Logo</a>
                  {/*begin::Image input*/}
                  <div className="image-input mt-3 image-input-empty w-150px h-150px" data-kt-image-input="true" >
                    {/*begin::Image preview wrapper*/}
                    <div className="image-input-wrapper w-150px h-150px"></div>
                    {/*end::Image preview wrapper*/}

                    {/*begin::Edit button*/}
                    <label className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" data-bs-dismiss="click" aria-label="Change avatar" data-kt-initialized="1">
                      <i className="bi bi-pencil-fill fs-7"></i>

                      {/*begin::Inputs*/}
                      <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                      <input type="hidden" name="avatar_remove" />
                      {/*end::Inputs*/}
                    </label>
                    {/*end::Edit button*/}

                    {/*begin::Cancel button*/}
                    <span className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" data-bs-dismiss="click" aria-label="Cancel avatar" data-kt-initialized="1">
                      <i className="bi bi-x fs-2"></i>
                    </span>
                    {/*end::Cancel button*/}

                    {/*begin::Remove button*/}
                    <span className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" data-bs-dismiss="click" aria-label="Remove avatar" data-kt-initialized="1">
                      <i className="bi bi-x fs-2"></i>
                    </span>
                    {/*end::Remove button*/}
                  </div>
                  {/*end::Image input*/}
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Text*/}
                <div className="d-flex flex-column w-100">
                  <a href="#" className="text-dark text-hover-primary fs-6 fw-bold">Select a Splash</a>
                  {/*begin::Image input*/}
                  <div className="image-input mt-3 image-input-empty w-300px h-300px" data-kt-image-input="true" >
                    {/*begin::Image preview wrapper*/}
                    <div className="image-input-wrapper w-300px h-300px"></div>
                    {/*end::Image preview wrapper*/}

                    {/*begin::Edit button*/}
                    <label className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" data-bs-dismiss="click" aria-label="Change avatar" data-kt-initialized="1">
                      <i className="bi bi-pencil-fill fs-7"></i>

                      {/*begin::Inputs*/}
                      <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                      <input type="hidden" name="avatar_remove" />
                      {/*end::Inputs*/}
                    </label>
                    {/*end::Edit button*/}

                    {/*begin::Cancel button*/}
                    <span className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" data-bs-dismiss="click" aria-label="Cancel avatar" data-kt-initialized="1">
                      <i className="bi bi-x fs-2"></i>
                    </span>
                    {/*end::Cancel button*/}

                    {/*begin::Remove button*/}
                    <span className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" data-bs-dismiss="click" aria-label="Remove avatar" data-kt-initialized="1">
                      <i className="bi bi-x fs-2"></i>
                    </span>
                    {/*end::Remove button*/}
                  </div>
                  {/*end::Image input*/}
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::List Widget 1*/}
        </div>
        <div className="col-xl-4">
          {/*begin::List Widget 1*/}
          <div className="card card-xl-stretch mb-xl-8">
            {/*begin::Header*/}
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-dark">Options</span>
              </h3>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-5">
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Text*/}
                <div className="d-flex flex-column w-100">
                  <div className="row">
                    <div className="col-7">
                      <a href="#" className="text-dark text-hover-primary fs-6 fw-bold">Welcome Message</a>
                    </div>
                    <div className="col-5 mb-1">
                      <div className="form-check form-switch float-end">
                        <input className="form-check-input" type="checkbox" value="" id="flexSwitchChecked" control-id="ControlID-6" />
                      </div>
                    </div>
                    <Form.Control
                      className='w-100 mt-5'
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                    />

                  </div>
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Text*/}
                <div className="d-flex flex-column w-100">
                  <div className="row">
                    <a href="#" className="text-dark text-hover-primary fs-6 fw-bold">App Context</a>
                    <Form.Control
                      className='w-100 mt-5'
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                    />
                  </div>
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::List Widget 1*/}
        </div>
      </div>
    </div>
  )
}

