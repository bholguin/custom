import axios from "axios";

export const loader = () => {
    const handleRequestSuccess = (request: any) => {
        return request;
    }

    const handleRequestError = async (error: string) => {
        console.log(`REQUEST ERROR! => ${error}`);
        throw error;
    }

    const handleResponseSuccess = (response: any) => {
        return response;
    }

    const handleResponseError = async (error: string) => {
        console.log(error);
        throw error;
    }
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.params = {};
    axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
}

const AxiosInterceptor = (WrappedComponent: any) => {
    return WrappedComponent
};

export default AxiosInterceptor;