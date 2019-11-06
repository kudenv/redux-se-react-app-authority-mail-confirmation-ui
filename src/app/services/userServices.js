import Request from './utils/baseService';

const userVerify = async (payload) => {   
    return await Request().post('/auth/verify', payload);  
};

const authServices = {
    verify: userVerify    
};

export default authServices;
