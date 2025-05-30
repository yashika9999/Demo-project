const express = require('express');
const path = require('path');
const app = express();
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Route to render EJS template
app.get('/', (req, res) => {
    res.render('index', { title:'EJS App', message: 'Hello from EJS!' });
});
//Start the server
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});