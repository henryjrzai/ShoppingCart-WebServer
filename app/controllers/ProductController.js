const db = require("../models/index");
const Product = db.products;

exports.findAll = async (req, res) => {
	try {
		const data = await Product.find();
		res.send(data);
	} catch (err) {
		res.status(500).send({
			message : err.message || "Some error occurred while retrieving products."
		});

	}
}

exports.findOne = (req, res) => {
	const code = String(req.params.code);

	Product.findOne({ code: code })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message : err.message || "Some error occurred while retrieving products."
			});
		});
}