import Request from './utils/baseService';

async function authlogin(payload) {   
    return await Request().post('/auth/login', payload);   
    // if (user && user.token) {
    //     localStorage.setItem('user', JSON.stringify(user));
    // }
};

// const handleResponse = (response) => {
//     if (!response.ok) {
//         return Promise.reject(response.statusText);
//     }

//     return response;
// };

async function authLogout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('user');
   
    return await Request().post('/auth/logout');
    // const user = undefined;
    // if (user && user.token) {
    //     localStorage.setItem('user', JSON.stringify(user));
    // }
    // return user;
}

async function authRegister(payload) {
    return await Request().post('/auth/register', payload);
}

const authServices = {
    login: authlogin,
    logout: authLogout,
    register: authRegister
};

export default authServices;
