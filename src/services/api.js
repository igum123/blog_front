import Request from './request';
import { getCookies } from 'cookies-next';

const apiUrl = process.env.NEXT_PUBLIC_API;
const cookieName = 'Acbvhz345dJZv';

const post = function (url, object, headers) {
    const token = getCookies(cookieName);
    return Request.post(`${apiUrl}${url}`, object, {
        ...headers,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: token[cookieName]
    });
}

const upload = function (url, files, object, headers, onprogress) {
    const token = getCookies(cookieName);
    return Request.upload(`${apiUrl}${url}`, files, object, {
        ...headers,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: token[cookieName]
    }, onprogress);
}

const get = function (url, headers) {
    const token = getCookies(cookieName);
    return Request.get(`${apiUrl}${url}`, {
        ...headers,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: token[cookieName]
    });
}

const deleteRequest = function (url, object, headers) {
    const token = getCookies(cookieName);
    return Request.delete(`${apiUrl}${url}`, object, {
        ...headers,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: token[cookieName]
    });
}

export default {
    apiUrl,
    post,
    get,
    upload,
    delete: deleteRequest
};