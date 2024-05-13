module.exports = (app) => {
	const products = require("../controllers/ProductController.js");

	const router = require("express").Router();

	router.get("/", products.findAll);
	router.get("/:code", products.findOne);

	app.use('/api/products', router);
}