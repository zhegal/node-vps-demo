const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
<h1>Express Demo API</h1>
<p>Status: Online</p>
<hr>
<div>It is working!!!</div>
<div id="a"></div>

<script>
const a = '11111';
const b = document.getElementById('a');
b.textContent = a;
</script>
    `);
});

app.get('/test', (req, res) => {
    res.json({
        hello: 'world!!!',
    });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});