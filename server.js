const express = require('express');
// const app = express();
const apiRs = require('./routes/apiRs');
const htmlRs = require('./routes/htmlRs');
const app = express();
const PORT = process.env.PORT || 3001;

// const fs = require('fs');


// middleware //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api',apiRs);
app.use('/', htmlRs);







// Starts the server, listening
app.listen(PORT, () => console.log(`You are now online through Port ${PORT}`));

