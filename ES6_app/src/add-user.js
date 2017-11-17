function addUser(e){
    e.preventDefault();

    const first_name = document.getElementById("name").value;
    // console.log(first_name);
    const last_name = document.getElementById("surname").value;
    const email = document.getElementById("email").value;

    const gender = document.querySelector("input[type='radio'][name='gender']:checked").value;

    const jobtitle = document.getElementById("jobtitle").value;
    const company = document.getElementById("company").value;
    const location = document.getElementById("location").value;
    const experience_years = document.getElementById("experienceY").value;
    const experience_months = document.getElementById("experienceM").value;
    const role = document.getElementById("role").value;


    console.log("adding a user");

    console.log(first_name, last_name, email, gender, jobtitle, company, location, experience_years, experience_months, role);
    document.querySelector(".add-user").reset(); // resets the form
}


export default addUser;
