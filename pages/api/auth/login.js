export default async function handler(req, res) {
	return new Response(
		{
			page: "login",
			data: [],
		},
		{
			status: 200,
			headers: {
				"content-type": "application/json",
				"cache-control": "public, s-maxage=0, stale-while-revalidate=0",
			},
		}
	);
}
