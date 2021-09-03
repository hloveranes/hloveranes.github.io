const Nav = (nodeElement) => {
  // on initialization
  var nav = nodeElement[0];
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
  
  let navButton = nav.children[0].addEventListener('click', () => {
    var navDrawer = nav.getAttribute('data-var');
    var drawer_menu = document.getElementById('drawer-menu');
    if(navDrawer == 'close'){
      // on open do the ff
      Open_nav();
      nav.setAttribute('data-var', 'open');
      drawer_menu.classList.remove('hidden');
      drawer_menu.classList.add('nav-drawer-effect');
      drawer_menu.classList.add('sticky');
    } else {
      // on close do the ff
      Close_nav();
      nav.setAttribute('data-var', 'close');
      drawer_menu.classList.remove('sticky');
      drawer_menu.classList.remove('nav-drawer-effect'); 
      drawer_menu.classList.add('hidden');
    }
  }) 
  
  // const OnLoadOfPage = () => {
  //   document.addEventListener('scroll', function(e) {
  //     window.scrollTo(0,0);
  //   })
  // }
}
export default { Nav }