const express = require('express');
const router = express.Router();
const base64 = require('base-64');
const fetch = require('node-fetch');
global.fetch = fetch
global.Headers = fetch.Headers;


router.get('/', (req, res, next) => {
    res.render('components.html');
});

router.post('/getComponents', (req, res, next) => {

    let url = 'http://34.68.197.46:8000/api/v1/dependencyGraph/artifact';
    let body = {
        path: 'artifactory-ha/docker-prod-local/docker-app/66'
    };
    let username = 'admin';
    let password = 'vF20YJo4yt';

    let basic = 'Basic ' + base64.encode(username + ":" + password);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': basic
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(json => {
            res.send(json);
        })
        .catch(error => console.error('Error:', error));
})

module.exports = router;