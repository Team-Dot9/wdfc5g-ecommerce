// const initialState = {
// 	categories: [],
// 	loading: true,
// 	error: null,
// };

const initialState = {
	categories: [
		{
			img: "./images/category/cat1.png",
			title: "Fashion",
			url: "/fashion",
		},
		{
			img: "./images/category/cat2.png",
			title: "Electronic",
			url: "/electronic",
		},
		{
			img: "./images/category/cat3.png",
			title: "Cars",
			url: "/cars",
		},
		{
			img: "./images/category/cat4.png",
			title: "Home & Garden",
			url: "/home-and-garden",
		},
		{
			img: "./images/category/cat5.png",
			title: "Gifts",
			url: "/gifts",
		},
		{
			img: "./images/category/cat6.png",
			title: "Music",
			url: "/music",
		},
		{
			img: "./images/category/cat7.png",
			title: "Health & Beauty",
			url: "/health-and-beauty",
		},
		{
			img: "./images/category/cat8.png",
			title: "Pets",
			url: "/pets",
		},
		{
			img: "./images/category/cat9.png",
			title: "Baby Toys",
			url: "/baby-toys",
		},
		{
			img: "./images/category/cat10.png",
			title: "Groceries",
			url: "/groceries",
		},
		{
			img: "./images/category/cat11.png",
			title: "Books",
			url: "/books",
		},
	],
	loading: false,
	error: null,
};

export const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_CATEGORIES":
			return { loading: true, error: null, categories: [] };
		case "FETCH_CATEGORIES_SUCCESS":
			return { loading: false, error: null, categories: action.payload };
		case "FETCH_CATEGORIES_ERROR":
			return { loading: false, error: action.payload, categories: [] };
		default:
			return state;
	}
};
