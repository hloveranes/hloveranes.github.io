// return a series or specific html:node element
const NodeElement = (element, by_id) => {
  return by_id ? document.getElementById(element) : document.querySelectorAll(element); 
}

export default { NodeElement }