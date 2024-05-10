const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/src/todolist.html');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server listening on port ${PORT}...');
});
