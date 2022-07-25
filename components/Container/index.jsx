import React from "react";

const Container = ({ children, className }) => {
	return <div className={`e_c_container ${className}`}>{children}</div>;
};

export default Container;
