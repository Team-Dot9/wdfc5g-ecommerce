import { Box, Modal, Typography } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import AuthSuccess from "./AuthSuccess";
import LogIn from "./LogIn";
import AuthRecover from "./recover";
import Register from "./Register";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	bgcolor: "background.paper",
	boxShadow: 24,
	borderRadius: "8px",
};

const AuthModel = ({ isVisible, onClick }) => {
	const [page, setPage] = useState("login");
	// const [page, setPage] = useState("success");
	const auth = useAuth();

	useEffect(() => {
		if (auth.loggedIn) onClick();
	}, [auth.loggedIn]);

	return (
		<Modal className="e_auth" open={isVisible} onClose={onClick}>
			<Box sx={style}>
				<Box
					className="auth__header"
					sx={{
						p: "3rem 3.75rem 0px",
					}}>
					<Typography
						variant="h6"
						component="h3"
						sx={{
							textAlign: "center",
							marginBottom: "8px",
							fontSize: "20px",
							lineHeight: "30px",
							color: "#2b3445",
						}}>
						Welcome to 5G Shop BD
					</Typography>
					<Typography
						component="h5"
						sx={{
							textAlign: "center",
							marginBottom: "36px",
							fontSize: "12px",
							lineHeight: "18px",
							color: "#373f50",
						}}>
						{page === "login" && "Log in with email & password"}
						{page === "register" && "Register for a new account"}
						{page === "recovery" && "Recover your account with email"}
					</Typography>
				</Box>

				<Box
					className="auth__body"
					sx={{
						p: "0 3.75rem 0px",
					}}>
					{page === "login" && <LogIn setPage={setPage} />}
					{page === "register" && <Register setPage={setPage} />}
					{page === "recovery" && <AuthRecover setPage={setPage} />}
					{page === "success" && <AuthSuccess />}
				</Box>

				{page !== "success" && (
					<Box
						className="auth__footer"
						sx={{
							p: "0 3.75rem 0px",
							display: "flex",
							flexDirection: "row",
							backgroundColor: "rgb(243, 245, 249)",
							webkitBoxPack: "center",
							justifyContent: "center",
							paddingTop: "19px",
							paddingBottom: "19px",
						}}>
						<Typography
							id="modal-modal-description"
							component="h5"
							sx={{
								marginBottom: "0px",
								textAlign: "center",
								fontSize: "12px",
								lineHeight: "18px",
								color: "#373f50",
							}}>
							Forgot your password?{" "}
							<span
								className="e_link"
								style={{
									borderBottom: "1px solid rgb(43, 52, 69)",
									fontWeight: 600,
									fontSize: "14px",
									marginBottom: "0px",
									marginTop: "0px",
									marginLeft: "0.5rem",
								}}
								onClick={() => setPage("recovery")}>
								Reset it
							</span>
						</Typography>
					</Box>
				)}
			</Box>
		</Modal>
	);
};

export default memo(AuthModel);
