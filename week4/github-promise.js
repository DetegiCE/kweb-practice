const axios = require('axios');

axios.get('https://api.github.com/repos/nodejs/node')
    .then(response => console.dir(response.data))
    .catch(error => console.error(error))
    
