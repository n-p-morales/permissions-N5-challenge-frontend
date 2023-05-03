import axios from "axios";

const ApiRequestFactory = {
    get ( url =' /', params = {}, data = {} ) {
        return axios({
            method: 'get',
            url,
            params,
            data
        });
    },

    post ( url = '/', data = {} ) {
        return axios({
            method: 'post',
            url,
            data
        });
    },

    put ( url = '/', data = {} ) {
        return axios({
            method: 'put',
            url,
            data
        });
    }
};

export default ApiRequestFactory;