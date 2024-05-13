module.exports = mongoose => {
	const schema = mongoose.Schema(
		{
			code : String,
			name : String,
			price : Number,
			description : String,
			imageUrl : String,
			averageRating : Number,
		},
	);

	// mengubah nilai _id menjadi id dari mongodb dan lainnya
	schema.method("toJSON", function() {
		const { __v, _id, ...object } = this.toObject();
		object.id = _id;
		return object;
	});

	const Products = mongoose.model("products", schema);
	return Products;
}