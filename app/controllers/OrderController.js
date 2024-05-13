const db = require("../models/index");
const Order = db.orders;

exports.findOrder = (req, res) => {
	const id = Number(req.params.id);
	// mencari data order berdasarkan userId
	Order.aggregate([{
		$match : { // mencari data order berdasarkan userId
			user_id : id
		}
	}, {
		$lookup : {
			from : "products", // collection that will be joined
			localField : "cart_items", // field that will be matched with field in the products collection
			foreignField : "code", // field that will be matched with field in the products collection
			as : "products" // name of the field that will be displayed in the response
		}
	}]).then((data) => {
		res.send(data);
	}).catch((err) => {
		res.status(500).send({
			message : err.message || "Some error occurred while retrieving orders."
		})
	})
}

exports.addOrder = (req, res) => {
	const id = Number(req.params.id);
	const productCode = req.body.code;
	console.log(productCode);

	Order.updateOne({ // update data order
		user_id : id
	}, {
		$addToSet: { // add new product to the cart_items field
			cart_items: productCode
		}
	}).then((data) => {
		res.send(data);
	}).catch((err) => {
		res.status(500).send({
			message : err.message || "Some error occurred while adding order."
		})
	})
}

exports.removeOrder = (req, res) => {
	const id = Number(req.params.id);
	const productCode = req.params.code;

	Order.updateOne({ // update data order
		user_id : id
	}, {
		$pull: { // remove product from the cart_items field
			cart_items: productCode
		}
	}).then((data) => {
		res.send(data);
	}).catch((err) => {
		res.status(500).send({
			message : err.message || "Some error occurred while adding order."
		})
	})
}