import axios from "axios";

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
})

const UseAxiosPublic = () => {
    return instance
};

export default UseAxiosPublic;