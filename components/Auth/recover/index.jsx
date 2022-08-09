import { Box, Button, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const submitButtonStyle = {
	display: "flex",
	width: "100%",
	WebkitBoxPack: "center",
	justifyContent: "center",
	WebkitBoxAlign: "center",
	alignItems: "center",
	outline: "none",
	cursor: "pointer",
	padding: "11px 1.5rem",
	fontWeight: 600,
	background: "#26e07f",
	transition: "all 150ms ease-in-out 0s",
	lineHeight: 1,
	border: "none",
	color: "rgb(255, 255, 255)",
	height: "40px",
	fontSize: "14px",
	marginBottom: "1.65rem",
	borderRadius: "5px",
	boxShadow: "none",
};

const AuthRecover = ({ setPage }) => {
	return (
		<>
			<div className="e_recover">
				<Formik
					initialValues={{ email: "" }}
					validate={(values) => {
						const errors = {};
						if (!values.email) {
							errors.email = "Required";
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = "Invalid email address";
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}>
					{({ isSubmitting }) => (
						<Form
							className="form__form"
							style={{ position: "relative", display: "block" }}>
							<Box className="form__input__wrapper">
								<label htmlFor="email">Email or Phone Number</label>
								<Field type="email" name="email" />
								<ErrorMessage
									className="form__error"
									name="email"
									component="small"
								/>
							</Box>

							<Button
								variant="contained"
								color="primary"
								type="submit"
								disabled={isSubmitting}
								sx={submitButtonStyle}>
								Submit
							</Button>
						</Form>
					)}
				</Formik>

				<Typography
					id="modal-modal-description"
					component="h5"
					sx={{
						textAlign: "center",
						marginBottom: "36px",
						fontSize: "12px",
						lineHeight: "18px",
						color: "#373f50",
						marginBottom: "1.25rem",
					}}>
					Don’t have account?{" "}
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
						onClick={() => setPage("login")}>
						Sign in
					</span>
				</Typography>
			</div>
		</>
	);
};

export default AuthRecover;
