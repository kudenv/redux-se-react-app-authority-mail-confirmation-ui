import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
    verifyRequest: ["verifyRequest"],
    verifySuccess: ["verifySuccess"],
    verifyFailure: ["verifyFailure"],
    

});

export { Creators, Types };