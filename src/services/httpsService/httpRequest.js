import axios from 'axios';

const apiUrl = () => {
    return 'http://localhost:3000'
};

axios.defaults.baseURL = apiUrl();

async function httpRequest(url, requestType, postData=null, params=null) {
    axios.defaults.headers={
        'Content-Type': 'application/json'
    };

    let res;
    try {
        res = await axios({method: requestType, url: url, data: postData, params: params});
        return res.data;
    } catch (e) {
        throw new Error();
    }
}

export default httpRequest;