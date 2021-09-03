// return a series or specific html:node element
const NodeElement = (element, by_id) => {
  return by_id ? document.getElementById(element) : document.querySelectorAll(element); 
}

const OnScrollPage = () => {
  document.addEventListener('scroll', function(e) {
    
    if(window.scrollY > 100){
      var drawer_menu = document.getElementById('drawer-menu');
      console.log(window.scrollY)   
      drawer_menu.classList.add('sticky');
    }
    
  });
}

// const OnLoadOfPage = () => {
//   document.addEventListener('scroll', function(e) {
//     window.scrollTo(0,0);
//   })
// }

export default { NodeElement, OnScrollPage }