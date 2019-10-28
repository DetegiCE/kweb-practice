const axios = require('axios');

async function getFile() {
    try {
        const response = await axios.get('https://api.github.com/repos/nodejs/node');
        console.dir(response.data);
    }
    catch(error) {
        console.error(error);
    }
}

getFile();
