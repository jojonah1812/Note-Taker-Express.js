const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const apiRoutes = require('./routes/apiRs');
const htmlRoutes = require('./routes/htmlRs');

// middleware //
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api',apiRs);
app.use('/', htmlRs);







// Starts the server, listening
app.listen(PORT, () => {
    console.log(`You are now online through Port ${PORT}`);
});
