import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineHeart } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { HiOutlineShoppingBag, HiUser } from "react-icons/hi";
import { TbClipboardList } from "react-icons/tb";

const SidebarItem = ({ className, item }) => {
	return (
		<ListItem
			key={item.id}
			className={`sidebar__list__item ${className && className}`}
			disablePadding>
			<ListItemButton>
				<ListItemIcon className="sidebar__list__icon" sx={{ minWidth: "35px" }}>
					{item.icon}
				</ListItemIcon>
				<ListItemText className="sidebar__list__title" primary={item.title} />
			</ListItemButton>
		</ListItem>
	);
};

const AccountSidebar = () => {
	const [permission, setPermission] = useState("admin");
	const LIST = [
		{
			id: "1",
			title: "My Account",
			slug: "profile",
			permission: "general",
			icon: <HiUser />,
		},
		{
			id: "8",
			title: "Products",
			slug: "products",
			permission: "manager",
			icon: <HiUser />,
		},
		{
			id: "2",
			title: "My Wishlist",
			slug: "wishlist",
			permission: "general",
			icon: <AiOutlineHeart />,
		},
		{
			id: "3",
			title: "My Cart",
			slug: "cart",
			permission: "general",
			icon: <HiOutlineShoppingBag />,
		},
		{
			id: "4",
			title: "Orders",
			slug: "orders",
			permission: "general",
			icon: <TbClipboardList />,
		},
		{
			id: "5",
			title: "Settings",
			slug: "settings",
			permission: "general",
			icon: <BsGearFill />,
		},
		{
			id: "6",
			title: "Users",
			slug: "users",
			permission: "admin",
			icon: <BsGearFill />,
		},
		{
			id: "7",
			title: "Logout",
			slug: "logout",
			permission: "general",
			icon: <BsGearFill />,
		},
	];

	return (
		<Box className="account__sidebar">
			<IconContext.Provider value={{ style: { fontSize: "20px" } }}>
				<List className="sidebar__list">
					{permission === "admin" &&
						LIST.map((item) => <SidebarItem key={item.id} item={item} />)}

					{permission === "manager" &&
						LIST.map(
							(item) =>
								item.permission !== "admin" && (
									<SidebarItem key={item.id} item={item} />
								)
						)}

					{permission === "general" &&
						LIST.map(
							(item) =>
								item.permission === "general" && (
									<SidebarItem key={item.id} item={item} />
								)
						)}
				</List>
			</IconContext.Provider>
		</Box>
	);
};

export default AccountSidebar;
