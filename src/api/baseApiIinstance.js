import axios from 'axios';

const COFFEE_MACHINE_URL = 'https://darkroastedbeans.coffeeit.nl/';

const BaseApiIinstance = () => {

    axios.interceptors.request.use((request) => {
        console.log("Axios Request : ", request);
        return request;
    }, (err) => {
        console.log("Error from API call : ", err);
    });


    return axios.create({
        baseURL: COFFEE_MACHINE_URL,
        headers: {
            accept: 'application/json',
        }
    })
}

export default BaseApiIinstance;