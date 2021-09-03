// return a series or specific html:node element
const NodeElement = (element, by_id) => {
  return by_id ? document.getElementById(element) : document.querySelectorAll(element); 
}

const OnScrollPage = (nodeElement) => {
  document.addEventListener('scroll', function(e) {
    // console.log(window.scrollY)   
    
    if(window.scrollY > 100 ){
      // var drawer_menu = document.getElementById('drawer-menu');
      nodeElement.classList.add('sticky');
    }
    
  });
}

export default { NodeElement, OnScrollPage }