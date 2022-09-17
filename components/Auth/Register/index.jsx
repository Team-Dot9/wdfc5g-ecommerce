import { Box, Button, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { memo } from "react";

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

const Register = ({ setPage }) => {
	return (
		<>
			<div className="e_register">
				<Formik
					initialValues={{ fullName: "", phone: "", password: "" }}
					validate={(values) => {
						const errors = {};

						// Full name
						if (!values.name) {
							errors.name = "Required";
						}

						// Phone number
						if (!values.phone) {
							errors.phone = "Required";
						} else if (
							!/(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/i.test(
								values.phone
							)
						) {
							errors.phone = "Invalid phone number";
						}

						if (!values.password) {
							errors.password = "Required";
						} else if (
							!/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/.test(
								values.password
							)
						) {
							errors.password =
								"8-32 characters, at least one uppercase letter, one lowercase letter, one number and one special character!";
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
								<label htmlFor="fullName">Full Name</label>
								<Field type="text" name="fullName" />
								<ErrorMessage
									className="form__error"
									name="fullName"
									component="small"
								/>
							</Box>

							<Box className="form__input__wrapper">
								<label htmlFor="phone">Phone Number</label>
								<Field type="phone" name="phone" />
								<ErrorMessage
									className="form__error"
									name="phone"
									component="small"
								/>
							</Box>

							<Box className="form__input__wrapper">
								<label htmlFor="password">Password</label>
								<Field type="password" name="password" />
								<ErrorMessage
									className="form__error"
									name="password"
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
					Have account?{" "}
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

export default memo(Register);
