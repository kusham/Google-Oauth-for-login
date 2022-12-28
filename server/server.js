const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000 || process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`App is running on port number ${PORT}`);
})    