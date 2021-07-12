// Testimonial(s)
const ExpandCollapse = (element, by_id) => {
  element.forEach(elmnt => {
    elmnt.addEventListener("click", () => {
      if(elmnt.children[0].classList.contains('txt-truncate')){
        elmnt.children[0].classList.remove("txt-truncate")
      }else{
        elmnt.children[0].classList.add("txt-truncate")
      }
    })
  });
}


export default { ExpandCollapse }