import axios from "axios";

const baseUrl = `./data/`;


const getServiceUrl = (url) => {
    // console.log(url)
    return axios
        .get(baseUrl + url)
        .then((response) => {
            // console.log(response)
            return response.data;
        })
        .catch((error) => {
            console.error("Error reading the JSON file:" + url, error);
        });
}

export default getServiceUrl;