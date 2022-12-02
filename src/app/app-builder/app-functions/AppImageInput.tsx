import React from 'react'

export function AppImageInput() {
  return (
    <div className="image-input image-input-empty" data-kt-image-input="true" style={{ backgroundImage: "url(./media/svg/avatars/blank.svg)" }}>
      <div className="image-input-wrapper w-125px h-125px"></div>

      <label className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
        data-kt-image-input-action="change"
        data-bs-toggle="tooltip"
        data-bs-dismiss="click"
        title="Change avatar">
        <i className="bi bi-pencil-fill fs-7"></i>

        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
        <input type="hidden" name="avatar_remove" />
      </label>

      <span className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
        data-kt-image-input-action="cancel"
        data-bs-toggle="tooltip"
        data-bs-dismiss="click"
        title="Cancel avatar">
        <i className="bi bi-x fs-2"></i>
      </span>

      <span className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
        data-kt-image-input-action="remove"
        data-bs-toggle="tooltip"
        data-bs-dismiss="click"
        title="Remove avatar">
        <i className="bi bi-x fs-2"></i>
      </span>
    </div>

  )
}

