import axios from 'axios'

const instance = axios.create( {
    baseURL: 'https://react-burger-ced3e.firebaseio.com/'
})

export default instance;