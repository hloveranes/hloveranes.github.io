const Nav = () => {
  // on initialization
  var nav = document.getElementsByClassName('nav-close')[0];
  var nav_data_var = nav.getAttribute('data-var');
  var first_span = nav.children[0].children[1].children[0];
  var second_span = nav.children[0].children[1].children[1];
  var third_span = nav.children[0].children[1].children[2];

  const Open_nav = ()=> {
    first_span.classList.remove("-translate-y-1.5");
    first_span.classList.add("rotate-45");
    second_span.classList.add("opacity-0");
    third_span.classList.remove("translate-y-1.5");
    third_span.classList.add("-rotate-45");
  }
  const Close_nav = () => {
    first_span.classList.remove("rotate-45");
    first_span.classList.add("-translate-y-1.5");
    second_span.classList.remove("opacity-0");
    third_span.classList.remove("-rotate-45");
    third_span.classList.add("translate-y-1.5");
  }

  if(nav_data_var == 'close') {
    Close_nav();
  } else {
    Open_nav();
  }
  
  var navButton = nav.children[0].addEventListener('click', () => {
    var nbutton_data = nav.getAttribute('data-var');
    var drawer_menu = document.getElementById('drawer-menu');
    if(nbutton_data == 'close'){
      Open_nav();
      nav.setAttribute('data-var', 'open');
      drawer_menu.classList.add('nav-drawer-effect');
    } else {
      Close_nav();
      nav.setAttribute('data-var', 'close');
      drawer_menu.classList.remove('sticky');
      drawer_menu.classList.remove('nav-drawer-effect');
    }
  }) 
  
  
}
export default { Nav }