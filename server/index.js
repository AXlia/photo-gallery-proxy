const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/properties', properties.get);
// app.patch('/api/properties/:propertyId', properties.patch);
// app.get('/api/photos/:propertyId', photos.get);





app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
