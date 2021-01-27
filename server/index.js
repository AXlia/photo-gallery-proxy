const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const carouselService = createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true })
const affordability = createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true })
const photoGallery = createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true })

app.use(['/api/homes', '/api/new', '/api/similar'], carouselService);
app.use(['/api/home_price', '/all_rates'], affordability);
app.use(['/api/photos', '/api/properties'], photoGallery);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
