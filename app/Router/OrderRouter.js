const products = require("../controllers/ProductController");
module.exports = (app) => {
	const orders = require("../controllers/OrderController");

	const router = require("express").Router();

	router.get("/user/:id", orders.findOrder);
	router.post("/user/:id/add", orders.addOrder);
	router.delete("/user/:id/remove/:code", orders.removeOrder);

	app.use('/api/orders', router);
}