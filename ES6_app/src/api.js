import {BASE_URI} from "./constants";

let API = {
    fetch(path){
        return new Promise((resolve,reject)=> {
            let uri = `${BASE_URI}/${path}`;
            let request = new XMLHttpRequest();

            request.open("GET", uri, true);
            request.onload = () => {
                if (request.status >= 200 && request.status < 400) {
                    resolve(JSON.parse(request.response));
                    // console.log(request.response);
                }
            }
            request.onerror = () => {
                reject(new Error("Something went wrong on the API feeding the db.json"));
            }
            request.send();
        });
    }

}

export default API;