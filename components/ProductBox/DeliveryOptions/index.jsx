import React, { useState } from "react";
import { IconContext } from "react-icons";
import {
	FaBabyCarriage,
	FaBookOpen,
	FaGuilded,
	FaMapMarkerAlt,
	FaMoneyBillAlt,
	FaShieldAlt,
} from "react-icons/fa";

const CITIES = [
	{
		id: 1,
		sku: "HGJH64",
		title: "Dhaka",
		subtitle: "Dhaka, Bangladesh",
		delivery: {
			time: "1-2 days",
			price: "৳ 100",
		},
		price: "100",
		discount: "10",
		slug: "dhaka",
		warranty: "Warranty Unavailable",
	},
	{
		id: 2,
		sku: "HG5H64",
		title: "Chittagong",
		subtitle: "Chittagong, Bangladesh",
		price: "100",
		discount: "10",
		slug: "chittagong",
	},
	{
		id: 3,
		sku: "HG6H64",
		title: "Sylhet",
		subtitle: "Sylhet, Bangladesh",
		price: "100",
		discount: "10",
		slug: "sylhet",
	},
	{
		id: 4,
		sku: "HG7H64",
		title: "Rajshahi",
		subtitle: "Rajshahi, Bangladesh",
		price: "100",
		discount: "10",
		slug: "rajshahi",
	},
];
const DeliveryOptions = () => {
	const [location, setLocation] = useState({ value: "Sylhet", visible: false });
	const [product, setProduct] = useState(CITIES[0]);

	const onChangeHandler = (e) => {
		e.preventDefault();

		setLocation({ ...location, visible: true });
	};

	const onChangeSubmitHandler = async (e) => {
		await e.preventDefault();

		setLocation({ ...location, value: e.target.city.value, visible: false });
		const [data] = await CITIES.filter(
			(city) => city.slug === e.target.city.value
		);

		setProduct(data);
	};

	return (
		<div className="e_pdo">
			<p className="pdo__title">Delivery Options</p>

			<div className="pdo__item pdo__city">
				<div className="pdo__key">
					<IconContext.Provider value={{ color: "#26e07f" }}>
						<FaMapMarkerAlt />
					</IconContext.Provider>
				</div>
				<div className="pdo__value">
					{location.value && !location.visible ? (
						<p>
							{location?.value}
							<button className="btn__city" onClick={onChangeHandler}>
								Change
							</button>
						</p>
					) : (
						<form className="pdo__city__form" onSubmit={onChangeSubmitHandler}>
							<select name="city" id="" placeholder="Select City">
								{CITIES.map((city) => (
									<option key={city.id} value={city.slug}>
										{city.title}
									</option>
								))}
							</select>
							<input type="submit" value="Change" />
						</form>
					)}
				</div>
			</div>

			<div className="pdo__item">
				<div className="pdo__key">
					<IconContext.Provider value={{ color: "#26e07f" }}>
						<FaBabyCarriage />
					</IconContext.Provider>
				</div>
				<div className="pdo__value">
					<p>Delivery Info</p>
					<p>Delivery Time: {product?.delivery?.time}</p>
					<p>Shipping Charge: {product?.delivery?.price}</p>
				</div>
			</div>

			<div className="pdo__item">
				<div className="pdo__key">
					<IconContext.Provider value={{ color: "#26e07f" }}>
						<FaMoneyBillAlt />
					</IconContext.Provider>
				</div>
				<div className="pdo__value">
					<p>Cash on Delivery Available</p>
				</div>
			</div>

			<div className="pdo__item">
				<div className="pdo__key">
					<IconContext.Provider value={{ color: "#26e07f" }}>
						<FaGuilded />
					</IconContext.Provider>
				</div>
				<div className="pdo__value">
					<p>100% genuine product</p>
				</div>
			</div>

			<div className="pdo__item">
				<div className="pdo__key">
					<IconContext.Provider value={{ color: "#26e07f" }}>
						<FaShieldAlt />
					</IconContext.Provider>
				</div>
				<div className="pdo__value">
					<p>Return & Warranty</p>
					<p>Delivery Time : 1-4 working days</p>
					<p>{product?.warranty}</p>
				</div>
			</div>

			<div className="pdo__item">
				<div className="pdo__key">
					<IconContext.Provider value={{ color: "#26e07f" }}>
						<FaBookOpen />
					</IconContext.Provider>
				</div>
				<div className="pdo__value">
					<p>Note:</p>
					<p>No note available.</p>
				</div>
			</div>
		</div>
	);
};

export default DeliveryOptions;
