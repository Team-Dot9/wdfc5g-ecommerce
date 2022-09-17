import { Button, Chip, IconButton, Menu, MenuItem } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { FcLock, FcUnlock } from "react-icons/fc";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdKeyboardArrowDown } from "react-icons/md";
import AccountUserInfo from "../AccountUserInfo";
import AccountWeight from "../AccountWeight";

function createData(sl, name, email, phone, role, status) {
	return {
		sl,
		id: `u${sl}`,
		createdAt: Date().now,
		name,
		email,
		phone,
		role,
		status,
	};
}

const headCells = [
	{
		id: "sl",
		numeric: false,
		label: "SL",
	},
	{
		id: "name",
		numeric: false,
		disablePadding: true,
		label: "Name",
	},
	{
		id: "phone",
		numeric: false,
		label: "Phone",
	},
	{
		id: "role",
		numeric: false,
		label: "Role",
	},
];

/**
 * There is 3 status mood for users.
 * 	1. Active 		=> This is account is active mood.
 * 	2. Deactivated 	=> This account in disabled or removed.
 * 	3. Review 		=> This user is banned or under review.
 */
const rows = [
	createData(
		"USR001",
		"Abu",
		"abut1081@gmail.com",
		"01234567890",
		"admin",
		"active"
	),
	createData(
		"USR002",
		"Muhammad",
		"abut1081@gmail.com",
		"01234567890",
		"general",
		"review"
	),
	createData(
		"USR003",
		"Abu Taher Muhammad",
		"abut1081@gmail.com",
		"01234567890",
		"general",
		"active"
	),
	createData(
		"USR004",
		"Abu Taher Muhammad",
		"abut1081@gmail.com",
		"01234567890",
		"manager",
		"active"
	),
	createData(
		"USR005",
		"Abu Muhammad",
		"abut1081@gmail.com",
		"01234567890",
		"manager",
		"deactivated"
	),
	createData(
		"USR006",
		"Abu Taher Muhammad",
		"abut1081@gmail.com",
		"01234567890",
		"admin",
		"review"
	),
];

export default function AccountUsers() {
	const [page, setPage] = useState(0);
	const [user, setUser] = useState({});
	const [userDrawer, setUserDrawer] = useState(true);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const showInfoHandler = (user) => {
		setUser(user);
		setUserDrawer(true);
	};

	const isSelected = (name) => selected.indexOf(name) !== -1;

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
	const changePermissionHandler = (p) => {
		console.log("Event: ", p);
		setPermission(p);
	};

	return (
		<>
			<AccountWeight>
				<Box sx={{ width: "100%" }}>
					{/* Table */}
					<TableContainer>
						<Table
							sx={{ minWidth: 750 }}
							aria-labelledby="tableTitle"
							size={"medium"}>
							<TableHead>
								<TableRow>
									{headCells.map((headCell) => (
										<TableCell
											key={headCell.id}
											align={headCell.numeric ? "right" : "left"}
											padding="normal">
											{headCell.label}
										</TableCell>
									))}
									<TableCell></TableCell>
								</TableRow>
							</TableHead>

							<TableBody>
								{rows
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((user, index) => {
										const labelId = `enhanced-table-checkbox-${index}`;

										console.log(user);
										return (
											<TableRow
												id={`USR-${user.id}`}
												key={index}
												hover
												tabIndex={-1}>
												{/* SL */}
												<TableCell component="th" scope="row" padding="normal">
													{index}
												</TableCell>

												{/* Name */}
												<TableCell component="th" padding="none">
													{user.name}

													{user.status !== "active" && (
														<Chip
															label={user.status}
															size="small"
															color={
																user.status === "deactivated"
																	? "error"
																	: "warning"
															}
															sx={{ marginLeft: 1 }}
														/>
													)}
												</TableCell>

												{/* Phone */}
												<TableCell>{user.phone}</TableCell>

												{/* Permission */}
												<TableCell padding="none">
													{/* User Permission Control */}
													<Box>
														<Button
															onClick={handleClick}
															variant="outlined"
															size="small"
															sx={{ ml: 2 }}
															aria-controls={open ? "account-menu" : undefined}
															aria-haspopup="true"
															aria-expanded={open ? "true" : undefined}
															endIcon={<MdKeyboardArrowDown />}>
															{user.role}
														</Button>

														<Menu
															anchorEl={anchorEl}
															open={open}
															onClose={handleClose}
															MenuListProps={{
																"aria-labelledby": "permission-menu-button",
															}}>
															<MenuItem
																onClick={() =>
																	changePermissionHandler("general")
																}>
																General
															</MenuItem>

															<MenuItem
																onClick={() =>
																	changePermissionHandler("manager")
																}>
																Manager
															</MenuItem>

															<MenuItem
																onClick={() =>
																	changePermissionHandler("admin")
																}>
																Admin
															</MenuItem>
														</Menu>
													</Box>
												</TableCell>

												<TableCell align="right">
													<IconButton
														onClick={() => showInfoHandler(user)}
														area-label="view user"
														variant="outline">
														<IoMdEye />
													</IconButton>

													<IconButton
														color="warning"
														aria-label="bane user"
														variant="outline">
														{rows.status === "review" ? (
															<FcLock />
														) : (
															<FcUnlock />
														)}
													</IconButton>

													<IconButton
														color="error"
														aria-label="delete user"
														variant="outline">
														<MdDelete />
													</IconButton>
												</TableCell>
											</TableRow>
										);
									})}

								{emptyRows > 0 && (
									<TableRow
										style={{
											height: 53 * emptyRows,
										}}>
										<TableCell colSpan={6} />
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>

					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component="div"
						count={rows.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Box>
			</AccountWeight>

			<AccountUserInfo
				user={user}
				setUser={setUser}
				userDrawer={userDrawer}
				setUserDrawer={setUserDrawer}
			/>
		</>
	);
}
