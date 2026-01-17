const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>Express Demo API</h1>
<p>Status: Online</p>
<hr>
<div>It is working!!!</div>
<div id="a"></div>

<script>
const a = document.getElementById('a');

function printTime() {
	const time = new Date();
	const hours = String(time.getHours()).padStart(2, "0");
	const minutes = String(time.getMinutes()).padStart(2, "0");
	const seconds = String(time.getSeconds()).padStart(2, "0");
    const result = ` + '`${hours}:${minutes}:${seconds}`' + `;
    a.textContent = result;
	setTimeout(printTime, 1000);
}

printTime();
</script>`);
});

app.get('/test', (req, res) => {
    res.json({
        hello: 'world!!!',
    });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});