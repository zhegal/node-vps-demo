const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Express Demo API</h1><p>Status: Online</p><hr><div>It is working!!!</div>');
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});