import axios from 'axios'

export default class RequestService {

    public constructor () {
    }

    static doGET = (url: string, body?: any, params?: any, token?: string) => {
        try {
            return axios.get(url, {
                data: body,
                params: params,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token !== undefined ? 'Bearer ' +  token : ''
                }
            });
        } catch (error) {
        console.error(error)
        }
    }

    static doPOST = (url: string, postdata?: any, token?: string) => {
        try {
            return axios.post(url, postdata, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token !== undefined ? 'Bearer ' +  token : ''
                }
            });
        } catch (error) {
            console.error(error)
        }
    }

    static doUPDATE = (url: string, postdata?: any, token?: string) => {
        try {
            return axios.put(url, postdata, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token !== undefined ? 'Bearer ' +  token : ''
                }
            });
        } catch (error) {
            console.error(error)
        }
    }

    public doDELETE = () => {

    }

}