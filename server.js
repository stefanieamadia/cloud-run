const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.send(__dirname + '/src/index.html');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server listening on port ${PORT}...');
});
