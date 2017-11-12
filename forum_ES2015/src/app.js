import Post from "./posts.js";
import User from "./users.js";
import ui from "./ui.js";

Post.findAll()
	.then(ui.renderPosts)
	.catch(
		(error) => { console.log(error) }
	);


User.findRecent()
	.then(ui.renderUsers)
	.catch( 
		(error) => { console.log(error) }
	);