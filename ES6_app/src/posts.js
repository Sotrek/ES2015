import API from "./api.js";

let Post = {
    findAll(){
        return API.fetch("user_profile");
    }
}

export default Post;