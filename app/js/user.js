// return a series or specific html:node element
const Owner = (owner_name, nodeElement) => {
  nodeElement[0].innerText = owner_name
}

const Role = (owner_role, nodeElement) => {
  nodeElement[0].innerText = owner_role
}

export default { Owner, Role }