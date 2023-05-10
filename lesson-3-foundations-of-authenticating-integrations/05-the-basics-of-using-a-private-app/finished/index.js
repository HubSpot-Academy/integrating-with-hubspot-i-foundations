const express = require('express');
const axios = require('axios');
const app = express();

const PRIVATE_APP_ACCESS = `pat-na1-b84163a6-1d98-44fd-a0e2-aaceefa3edc8`;

app.get('/', async (req, res) => {
    const companies = 'https://api.hubspot.com/crm/v3/objects/companies';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }
    try {
        const response = await axios.get(companies, { headers });
        res.json(response.data.results);    
    } catch (error) {
        console.error(error);
    }
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));