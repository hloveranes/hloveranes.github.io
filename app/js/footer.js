// Footer
// Made to easily change value of users info

const LinkedIn = (linkedin_url, nodeElement) => {
  nodeElement.href = linkedin_url
}

const GitHub = (github_url, nodeElement) => {
  nodeElement.href = github_url
}

const OnlineJobsPh = (online_jobs_ph_url, nodeElement) => {
  nodeElement.href = online_jobs_ph_url
}

const PhoneNumber = (phone_number, nodeElement) => {
  nodeElement.href += phone_number
  nodeElement.innerText = phone_number
}

const Email = (email, nodeElement) => {
 nodeElement.href += email
 nodeElement.innerText = email
}

const FooterDetails = (owner, year, nodeElement) => {
  var footer_text = nodeElement.innerText
  var res = footer_text.replace(/xxxx|Owner/gi,(x) => {
    if(x == 'xxxx'){
      return year
    }else{
      return owner
    }
  });
  nodeElement.innerText = res
}

export { LinkedIn, GitHub, OnlineJobsPh, PhoneNumber, Email, FooterDetails }

