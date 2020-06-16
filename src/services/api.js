import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

// axios.get('http://localhost:3333/profile').then(function (response) {
//     // handle success
//     console.log(response);
// })

export default api;
