import React from 'react'

export function AppProjects() {
	return (
		<div className="row g-6 g-xl-9">
			{/*begin::Col*/}
			<div className="col-md-6 col-xl-4">
				{/*begin::Card*/}
				<a href={"./app/app-builder/AppDefine"} className="card border-hover-primary">
					{/*begin::Card header*/}
					<div className="card-header border-0 pt-9">
						{/*begin::Card Title*/}
						<div className="card-title m-0">
							{/*begin::Avatar*/}
							<div className="symbol symbol-75px w-75px bg-light">
							<img src={"./media/svg/mylogos/SmartBanking-v-nobg.svg"} alt="image" className="p-3" />
							</div>
							{/*end::Avatar*/}
						</div>
						{/*end::Car Title*/}
						{/*begin::Card toolbar*/}
						<div className="card-toolbar">
							<span className="badge badge-light-primary fw-bold me-auto px-4 py-3">In Progress</span>
						</div>
						{/*end::Card toolbar*/}
					</div>
					{/*end:: Card header*/}
					{/*begin:: Card body*/}
					<div className="card-body p-9">
						{/*begin::Name*/}
						<div className="fs-3 fw-bold text-dark">Smart Banking</div>
						{/*end::Name*/}
						{/*begin::Description*/}
						<p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">Made by Appliction Builder | Powered by Center UX</p>
						{/*end::Description*/}
						{/*begin::Info*/}
						<div className="d-flex flex-wrap mb-5">
							{/*begin::Due*/}
							<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
								<div className="fs-6 text-gray-800 fw-bold">Jun 20, 2018</div>
								<div className="fw-semibold text-gray-400">Due Date</div>
							</div>
							{/*end::Due*/}
							{/*begin::Budget*/}
							<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
								<div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
								<div className="fw-semibold text-gray-400">Budget</div>
							</div>
							{/*end::Budget*/}
						</div>
						{/*end::Info*/}

						{/*begin::Progress*/}

						{/*end::Progress*/}
						
						{/*begin::Users*/}
						<div className="symbol-group symbol-hover">
							{/*begin::User*/}
							<div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" aria-label="Emma Smith" data-kt-initialized="1">
								<img alt="Pic" src={"./media/avatars/ali.jpg"} />
							</div>
							{/*end::User*/}
							{/*begin::User*/}
							<div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" data-kt-initialized="1">
								<span className="symbol-label bg-primary text-inverse-primary fw-bold">A</span>
							</div>
							{/*end::User*/}
						</div>
						{/*end::Users*/}
					</div>
					{/*end:: Card body*/}
				</a>
				{/*end::Card*/}
			</div>
			{/*end::Col*/}
		</div>


	)
}

