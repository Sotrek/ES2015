import Post from "./posts.js";
import ui from "./ui.js";

Post.findAll().then(ui.renderPosts).catch( (error) => console.log(error) );

function addUser(e){
    e.preventDefault();

    const first_name = this.getElementById("#first_name").value;
    const last_name = this.getElementById("#last_name").value;
    const email = this.getElementById("#email").value;

    const gender = this.querySelector(input[type='radio'][name='gender']:checked);

    const jobtitle = this.getElementById("#jobtitle").value;
    const company = this.getElementById("#company").value;
    const location = this.getElementById("#location").value;
    const experience_years = this.getElementById("#experience_years").value;
    const experience_months = this.getElementById("#experience_months").value;
    const role = this.getElementById("#role").value;



    console.log(first_name, last_name, email, gender, jobtitle, company, location, experience_years, experience_months, role);
    this.reset(); // resets the form
}


addItems.addEventListener('submit', addItem);


