const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;


app.use(express.static(__dirname + '/../client/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/properties', properties.get);
// app.patch('/api/properties/:propertyId', properties.patch);
// app.get('/api/photos/:propertyId', photos.get);

const carouselService = createProxyMiddleware({ target: 'localhost:3001', changeOrigin: true })
const affordability = createProxyMiddleware({ target: 'localhost:3002', changeOrigin: true })
const photoGallery = createProxyMiddleware({ target: 'localhost:3003', changeOrigin: true })

app.use(['/api/homes', '/api/new', '/api/similar'], carouselService);
app.use(['/api/home_price', '/all_rates'], affordability);
app.use(['/api/photos', '/api/properties'], photoGallery);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
