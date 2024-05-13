const express = require('express');
const app = express();
const path = require('path'); // Add this line to import the path module`
const port = 8000;

// Menambahkan middleware untuk mengizinkan CORS
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // Mengizinkan akses dari semua origin
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Metode HTTP yang diizinkan
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Header yang diizinkan
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static(path.join(__dirname, '/public/img'))); // Add this line to serve images from the public/img directory

const db = require('./app/models/index');

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
	try {
		// Create a Mongoose client with a MongoClientOptions object to set the Stable API version
		await db.mongoose.connect(db.url, clientOptions);
		await db.mongoose.connection.db.admin().command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
	} catch (e) {
		console.error(`There was an error connecting to MongoDB: ${e}`);
		process.exit();
	}
}
run().catch(console.dir);


app.get('/', (req, res) => {
	res.json({
		message: 'Hello World'
	})
})

require('./app/Router/ProductRouter')(app);
require('./app/Router/OrderRouter')(app);

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
})