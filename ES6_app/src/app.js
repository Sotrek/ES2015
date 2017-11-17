import Post from "./posts.js";
import ui from "./ui.js";
import addUser from "./add-user.js";

Post.findAll().then(ui.renderPosts).catch( (error) => console.log(error) );


const submitButton = document.querySelector("input[type=\"submit\"]")

submitButton.addEventListener('click', addUser);


