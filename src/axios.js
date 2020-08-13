import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/posts'
})

instance.defaults.headers.common['Authization'] = 'AUTH TOKEN FROM AXIOS';

export default instance;