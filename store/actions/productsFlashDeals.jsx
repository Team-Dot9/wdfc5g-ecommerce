import { groq } from "next-sanity";
import { getClient } from "../../utils/sanity.utils";

const QUERY = groq`*[_type=="product" && isFlashDeal==true]`;

export const fetchProductsFlashDeals = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_PRODUCTS",
			});
			const response = await getClient(false).fetch(QUERY);
			dispatch({
				type: "FETCH_PRODUCTS_SUCCESS",
				payload: response,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_PRODUCTS_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};
