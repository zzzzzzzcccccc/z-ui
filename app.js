const express = require('express');
const path = require('path');
const app = express();

const port = 8084;
const resolve = file => path.resolve(__dirname, file);

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache ? 60 * 60 * 24 * 30 : 0
});

app.use('/', serve('./z-uiExample', true));

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
});


