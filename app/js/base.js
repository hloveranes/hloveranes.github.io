// return a series or specific html:node element
const NodeElement = (element, by_id) => {
  return by_id ? document.getElementById(element) : document.querySelectorAll(element); 
}

const OnScrollPage = (nav, drawerMenu) => {
  document.addEventListener('scroll', function(e) {
    var navDrawer = nav[0].getAttribute('data-var');  
    if(navDrawer == 'open'){
      drawerMenu.classList.remove('hidden');
      drawerMenu.classList.add('sticky');
    } else if (window.scrollY < 100){
      drawerMenu.classList.remove('sticky');
      drawerMenu.classList.add('hidden');
    } else {
      drawerMenu.classList.remove('sticky');
      drawerMenu.classList.add('hidden');
    }
  });
}

export default { NodeElement, OnScrollPage }