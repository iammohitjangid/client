import axios from 'axios';

const axio = axios.create({
    baseURL:'https://visual-data-greendeck.herokuapp.com/'
});
export default axio;