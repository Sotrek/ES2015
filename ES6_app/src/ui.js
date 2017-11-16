import xss from "xss-filters";

let ui = {
    renderPosts(user_profiles){
        let elements = user_profiles.map( (user_profile) => {
            let { first_name, last_name, email, gender, Job_title, company, location, experience_years, experience_months, role } = user_profile;
            return articleTemplate(first_name, last_name, email, gender, Job_title, company, location, experience_years, experience_months, role);
        });

        let target = document.querySelector(".grid");
        target.innerHTML = elements.join("");

        // console.log(posts);
    }
}


function articleTemplate (first_name, last_name, email, gender, Job_title, company, location, experience_years, experience_months, role) {
    let safeName = xss.inHTMLData(first_name);
    let safeSurname = xss.inHTMLData(last_name);
    let safeEmail = xss.inHTMLData(email);
    let safeGender = xss.inHTMLData(gender);
    let safeJTitle = xss.inHTMLData(Job_title);
    let safeCompany = xss.inHTMLData(company);
    let safeLocation = xss.inHTMLData(location);
    let safeExperienceYears = xss.inHTMLData(experience_years);
    let safeExperienceMonths = xss.inHTMLData(experience_months);
    let safeRole = xss.inHTMLData(role);


    let template = `
    <article class="post">
        <h2 class="full_name">Fullname: ${safeName} ${safeSurname}</h2>
        <section>
            <p class="email">Email: ${safeEmail}</p>
            <p class="gender">Gender: ${safeGender}</p>
            <p class="job_title">Job Title: ${safeJTitle}</p>
            <p class="company">Company: ${safeCompany}</p>
            <p class="location">Location: ${safeLocation}</p>
            <p class="experience_year">Experience Years: ${safeExperienceYears}</p>
            <p class="experience_month">Experience Months: ${safeExperienceMonths}</p>
            <p class="role">Role: ${safeRole}</p>
        </section>
    </article>`;
    return template;
}

export default ui;