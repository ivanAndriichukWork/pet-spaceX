import axios, {AxiosRequestConfig} from 'axios';
import { someVariables } from './someVariables'

export default ({
                    baseURL = process.env.STRIPE,
                    url = '',
                    method = 'get',
                    params = {},
                    data = {},
                    headers = {},
                } : AxiosRequestConfig) => {
    if (headers && headers.authorization) {
        headers.authorization = someVariables.token
    }
    return axios({
        baseURL,
        url,
        method,
        params,
        data,
        headers
    })
}
