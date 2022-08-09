import { Button, Menu, MenuItem } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function createData(id, name, email) {
	return {
		id,
		name,
		email,
	};
}

const headCells = [
	{
		id: "name",
		numeric: false,
		disablePadding: true,
		label: "Name",
	},
	{
		id: "email",
		numeric: false,
		disablePadding: false,
		label: "Email",
	},
	{
		id: "permission",
		numeric: false,
		disablePadding: false,
		label: "Permission",
	},
	{
		id: "actions",
		numeric: false,
		disablePadding: false,
		label: "Actions",
	},
];

const rows = [
	createData("USR001", "Abu Taher Muhammad", "abut1081@gmail.com"),
	createData("USR002", "Abu Taher Muhammad", "7898798754-37"),
	createData("USR003", "Abu Taher Muhammad", "abut1081@gmail.com"),
	createData("USR004", "Muhammad Abdullah", "amuhammadabdullah@gmail.com"),
	createData("USR005", "Abu Taher Muhammad", "abut1081@gmail.com"),
	createData("USR006", "Abu Taher Muhammad", "7045732754-37"),
];

export default function AccountWishlist() {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [permission, setPermission] = useState("general");
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = (event) => {
		console.log("Permission: ", event.target.value);
		setPermission(event.target.value);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
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
									padding={headCell.disablePadding ? "none" : "normal"}>
									{headCell.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>

					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row, index) => {
								const labelId = `enhanced-table-checkbox-${index}`;

								return (
									<TableRow hover tabIndex={-1} key={row.name}>
										<TableCell
											component="th"
											id={labelId}
											scope="row"
											padding="none">
											<Link href={`/account/profile?user=${row?.id}`}>
												<a>{row.name}</a>
											</Link>
										</TableCell>
										<TableCell>{row.email}</TableCell>
										<TableCell>
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
													{permission}
												</Button>
												<Menu
													id="basic-menu"
													anchorEl={anchorEl}
													open={open}
													onClose={handleClose}
													MenuListProps={{
														"aria-labelledby": "basic-button",
													}}>
													<MenuItem
														onClick={() => changePermissionHandler("general")}>
														General
													</MenuItem>
													<MenuItem
														onClick={() => changePermissionHandler("manager")}>
														Manager
													</MenuItem>
													<MenuItem
														onClick={() => changePermissionHandler("admin")}>
														Admin
													</MenuItem>
												</Menu>
											</Box>
										</TableCell>

										<TableCell align="right"></TableCell>
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
	);
}
