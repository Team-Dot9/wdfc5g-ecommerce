export default function (req, res) {
	req.status(200).send({
		page: "register",
		data: [],
	});
}
