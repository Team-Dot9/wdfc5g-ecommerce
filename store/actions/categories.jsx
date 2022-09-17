import { groq } from "next-sanity";
import useSWR from "swr";
import { getClient } from "../../utils/sanity.utils";

const QUERY = groq`*[_type == "category"] {
	_id,
	title
  }`;

export const fetchCategories = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "FETCH_CATEGORIES",
			});

			// Fetching data from the data lake.
			const response = await useSWR(
				"categories",
				getClient(false).fetch(QUERY)
			);
			console.log("CATEGORIES: ", response);
			dispatch({
				type: "FETCH_CATEGORIES_SUCCESS",
				payload: response.data.data,
			});
		} catch (e) {
			dispatch({
				type: "FETCH_CATEGORIES_ERROR",
				payload: "Error fetch data",
			});
		}
	};
};
