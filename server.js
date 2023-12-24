const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

app.get('/searchword', cors(), async (req, res) => {
  console.log('Received request:', req.query);

  const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/definition/',
  params: {entry: 'mask'},
  headers: {
    'X-RapidAPI-Key': 'a906994f68msh8011eaf0682b049p187766jsn795feb8e7721',
    'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
    res.status(500).json({ error: 'Internal Server Error' });
  }
);  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
