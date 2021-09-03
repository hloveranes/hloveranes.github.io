// Portfolio Settings

import Base from "./base.js";
import Navigation from "./navigation.js"
import User from "./user.js";
import Remove from "./remove.js";
import Project from "./project.js";
import Testimonial from "./testimonial.js";
import * as Footer from "./footer.js";


// work section

// display count
var display_count = 3

var context_json = [
    {
        img_source: "./app/photo/project/psms.png",
        img_alt_name: "psms",
        project_title: "Project Status Monitoring System",
        description: "A comprehensive online monitoring for project and contract implementation built in Django and Vue.",
        project_url: "https://psms.ph/"
    },
    {
        img_source: "./app/photo/project/pickstofit.png",
        img_alt_name: "pickstofit",
        project_title: "Pickstofit",
        description: "Home of quality nutrition and health products guides and reviews that advertise different content using web scraping.",
        project_url: "https://pickstofit.com/"
    },
    {
        img_source: "./app/photo/project/mLGU.png",
        img_alt_name: "mLGU",
        project_title: "Modernize Local Government Unit",
        description: "Modernized the way government managed and produce report for faster transaction using Django and Vue.",
        project_url: "#"
    }
]

var user_linkedin_url = 'https://www.linkedin.com/in/harmony-loveranes-318104163/'
var user_github_url = 'https://github.com/hloveranes'
var online_jobs_ph_url = 'https://www.onlinejobs.ph/jobseekers/info/1346896'
var user_email = 'hloveranes1@gmail.com'
var user_phone_number = '+6391 0683-8083'
var current_year = new Date().getFullYear()
var owner = 'Harmony Loveranes'
var role = 'Full Stack Web Developer'

// calls all function

Remove.CodeComment()

// Base.OnLoadOfPage()
Base.OnScrollPage()
Navigation.Nav()

// work
Project.Project(context_json, display_count, Base.NodeElement('owner-projects', true))

Testimonial.ExpandCollapse(Base.NodeElement('.collapsible-panel', false))

User.Owner(owner, Base.NodeElement('.owner-name', false))
User.Role(role, Base.NodeElement('.owner-role', false))

// footer
Footer.LinkedIn(user_linkedin_url, Base.NodeElement('user-linkedin', true))
Footer.GitHub(user_github_url, Base.NodeElement('user-github', true))
Footer.OnlineJobsPh(online_jobs_ph_url, Base.NodeElement('user-online-jobs-ph', true))
Footer.PhoneNumber(user_phone_number, Base.NodeElement('user-phone-number', true))
Footer.Email(user_email, Base.NodeElement('user-email', true))
Footer.FooterDetails(owner, current_year, Base.NodeElement('page-footer', true))

