import Link from "next/link";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiPhoneLine } from "react-icons/ri";
import { info } from "../../../store/constant.store";

const TopBar = () => {
	return (
		<>
			<section className="e_topbar">
				<div className="container d_flex">
					<div className="topbar__left">
						<div className="topbar__link topbar__phone">
							<Link href={`tel:${info?.phone}`}>
								<a>
									<RiPhoneLine />
									<label>{info?.phone}</label>
								</a>
							</Link>
						</div>

						<div className="topbar__link topbar__email">
							<Link href={`mailto:${info?.email}`}>
								<a>
									<HiOutlineMail />
									<label>{info?.email}</label>
								</a>
							</Link>
						</div>
					</div>

					<div className="topbar__right RText">
						{/* <label>Theme FAQ's</label> */}
						<label>Need Help?</label>
					</div>
				</div>
			</section>
		</>
	);
};

export default TopBar;
