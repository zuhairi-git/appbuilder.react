
export function AppProperties() {
  return (
    <>
        <button id="kt_drawer_example_basic_button" className="btn btn-dark btn-sm p-3">Modify</button>

      {/* begin::View component */}
      <div
        id="kt_drawer_example_basic"
        className="bg-dark"
        data-kt-drawer="true"
        data-kt-drawer-activate="true"
        data-kt-drawer-toggle="#kt_drawer_example_basic_button"
        data-kt-drawer-close="#kt_drawer_example_basic_close"
        data-kt-drawer-width="500px"
      >
        <div className="card w-100 rounded-0 border-0" id="kt_drawer_chat_messenger">
				{/* begin::Card header */}
				<div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
					{/* begin::Title */}
					<div className="card-title">
						{/* begin::User */}
						<div className="d-flex justify-content-center flex-column me-3">
							<a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Properties</a>
							{/* begin::Info */}
							<div className="mb-0 lh-1">
								<span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
								<span className="fs-7 fw-semibold text-muted">Item is Visable</span>
							</div>
							{/* end::Info */}
						</div>
						{/* end::User */}
					</div>
					{/* end::Title */}
					{/* begin::Card toolbar */}
					<div className="card-toolbar">
						{/* begin::Menu */}
						<div className="me-2">
							<button className="btn btn-sm btn-icon btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" control-id="ControlID-22">
								<i className="bi bi-three-dots fs-3"></i>
							</button>
							{/* begin::Menu 3 */}
							<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
								{/* begin::Heading */}
								<div className="menu-item px-3">
									<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Contacts</div>
								</div>
								{/* end::Heading */}
								{/* begin::Menu item */}
								<div className="menu-item px-3">
									<a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
								</div>
								{/* end::Menu item */}
								{/* begin::Menu item */}
								<div className="menu-item px-3">
									<a href="#" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts 
									<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Specify a contact email to send an invitation" data-bs-original-title="Specify a contact email to send an invitation" data-kt-initialized="1"></i></a>
								</div>
								{/* end::Menu item */}
								{/* begin::Menu item */}
								<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
									<a href="#" className="menu-link px-3">
										<span className="menu-title">Groups</span>
										<span className="menu-arrow"></span>
									</a>
									{/* begin::Menu sub */}
									<div className="menu-sub menu-sub-dropdown w-175px py-4">
										{/* begin::Menu item */}
										<div className="menu-item px-3">
											<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized="1">Create Group</a>
										</div>
										{/* end::Menu item */}
										{/* begin::Menu item */}
										<div className="menu-item px-3">
											<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized="1">Invite Members</a>
										</div>
										{/* end::Menu item */}
										{/* begin::Menu item */}
										<div className="menu-item px-3">
											<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized="1">Settings</a>
										</div>
										{/* end::Menu item */}
									</div>
									{/* end::Menu sub */}
								</div>
								{/* end::Menu item */}
								{/* begin::Menu item */}
								<div className="menu-item px-3 my-1">
									<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" data-bs-original-title="Coming soon" data-kt-initialized="1">Settings</a>
								</div>
								{/* end::Menu item */}
							</div>
							{/* end::Menu 3 */}
						</div>
						{/* end::Menu */}
						{/* begin::Close */}
						<div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_chat_close">
							{/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg */}
							<span className="svg-icon svg-icon-2">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
								</svg>
							</span>
							{/* end::Svg Icon */}
						</div>
						{/* end::Close */}
					</div>
					{/* end::Card toolbar */}
				</div>
				{/* end::Card header */}
				{/* begin::Card body */}
				<div className="card-body" id="kt_drawer_chat_messenger_body">

				</div>
				{/* end::Card body */}
				{/* begin::Card footer */}
				<div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
				</div>
				{/* end::Card footer */}
			</div>
      </div>
      {/* end::View component */}
      </>
      )
}

