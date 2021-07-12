// remove code comments on production
const CodeComment = () => {
  window.addEventListener("load", (curNode) => {
    // Fourth argument, which is actually obsolete according to the DOM4 standard, is required in IE 11
    var iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT, () => NodeFilter.FILTER_ACCEPT, false);
    while (curNode = iterator.nextNode()) {curNode.remove();}
  })
}

export default { CodeComment }