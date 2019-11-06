import axios from 'axios';

const request = () => {
    const customRequest = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 15000,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const responseNormalize = (response) => {
        const {data} = response;
        if (data) {
            return {
                data,
                error: false,
            }
        }
        return {
            error: true,
            data: null
        }
    };

    const errorResponseNormalize = (error) => {
        const {response} = error;
        let errorData = {};
        if (response && response.data) {
            errorData = {
                error: true,
                errorStatus: response.status,
                errorStatusText: response.statusText,
                errorMessage: response.data.msg,
                errorName: response.data.name,
            }
        }
        if (error && error.isAxiosError && error.message) {
            errorData = {
                error: true,
                message: error.message 
            }
        }
        return errorData;
    };

    // abstract method to treat respnse, allow supply own strategy to serve response data in any case
    const getMethod = (url, config, normalize = responseNormalize, errorNormalize = errorResponseNormalize) => {
        return customRequest.get(url, config).then(response => {
            return normalize(response);
        }).catch(error => {
            return errorNormalize(error)
        })
    };

    const postMethod = (url, data, config, normalize = responseNormalize, errorNormalize = errorResponseNormalize) => {
        return customRequest.post(url, data, config).then(response => {
            return normalize(response);
        }).catch(error => {
            return errorNormalize(error)
        })

    };

    const patchMethod = (url, data, config, normalize = responseNormalize, errorNormalize = errorResponseNormalize) => {
        return customRequest.patch(url, data, config).then(response => {
            return normalize(response);
        }).catch(error => {
            return errorNormalize(error)
        })

    };

    const deleteMethod = (url, config, normalize = responseNormalize, errorNormalize = errorResponseNormalize) => {
        return customRequest.delete(url, config).then(response => {
            return normalize(response);
        }).catch(error => {
            return errorNormalize(error)
        })

    };

    return {
        get: getMethod,
        post: postMethod,
        patch: patchMethod,
        delete: deleteMethod
    }
};

export default request;