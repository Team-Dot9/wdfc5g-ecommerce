import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineDashboard, AiOutlineHeart } from "react-icons/ai";
import { BsFillPeopleFill, BsGearFill } from "react-icons/bs";
import { HiOutlineShoppingBag, HiUser } from "react-icons/hi";
import { ImExit } from "react-icons/im";
import { TbClipboardList } from "react-icons/tb";

const SidebarItem = ({ className, item }) => {
	const router = useRouter();

	const updateRouteHandler = (slug) => {
		const url = `/account#${slug}`;
		if (url) return router.push(url);
	};

	return (
		<ListItem
			key={item.id}
			className={`sidebar__list__item ${className && className}`}
			onClick={() => updateRouteHandler(item.slug)}
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
			title: "Dashboard",
			slug: "dashboard",
			permission: "general",
			icon: <AiOutlineDashboard />,
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
			id: "6",
			title: "Users",
			slug: "users",
			permission: "admin",
			icon: <BsFillPeopleFill />,
		},
		{
			id: "5",
			title: "Settings",
			slug: "settings",
			permission: "general",
			icon: <BsGearFill />,
		},
		{
			id: "7",
			title: "Logout",
			slug: "logout",
			permission: "general",
			icon: <ImExit />,
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
