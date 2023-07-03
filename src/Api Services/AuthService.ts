import axios from "axios";
import { UserDataType } from "../Types/types";

const baseURL = "http://localhost:4100";

const authURL = `${baseURL}/auth/`;

const authInstance = axios.create({
    baseURL: authURL,
    headers: {
        "Content-Type": "application/json",
    },
});


type loginResponseType = {
    accessToken: string;
    message: string;
    success: Boolean;
    data: UserDataType;
};


export const loginRequest = async (body: any): Promise<loginResponseType | null> => {
    try {
        const loginResponse = await authInstance.post("login", JSON.stringify(body));
        console.log("loginRespinse", loginResponse);
        if (loginResponse?.status === 200) {
            return loginResponse?.data;
        }
        return null;
    } catch (err) {
        console.log("loginRequest errror", err);
        return null;
    }
};

export const registerRequest = async (body: any) => {
    try {
        const registerResponse = await authInstance.post(
            "register",
            JSON.stringify(body)
        );
        if (registerResponse?.status === 200) {
            return registerResponse?.data;
        }
        return null;
    } catch (err) {
        console.log("registerRequest errror", err);
        return null;
    }
};
