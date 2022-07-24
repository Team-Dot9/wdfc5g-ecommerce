import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { AiFillCaretRight } from "react-icons/ai";

const WidgetSection = ({ children, className, icon, title, url, ...rest }) => {
	return (
		<>
			<section className={`e_c_ws ${className}`} {...rest}>
				<div className="container">
					{/* Header Started */}
					<div className="ws__head">
						<div className="head__left">
							<Image
								className="head__img"
								src={icon}
								width={40}
								height={30}
								alt={title}
							/>
							<h2 className="head__title">{title}</h2>
						</div>

						<div className="head__right">
							<Link href={url}>
								<a>
									<span>View all</span>

									<IconContext.Provider value={{ style: { fontSize: "12px" } }}>
										<AiFillCaretRight />
									</IconContext.Provider>
								</a>
							</Link>
						</div>
					</div>
					{/* Header Ended */}

					{/* Body Started */}
					<div className="ws__body">{children}</div>
					{/* Body Ended */}
				</div>
			</section>
		</>
	);
};

export default WidgetSection;
