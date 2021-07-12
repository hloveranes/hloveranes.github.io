// Project(s)
let isRemoved = false;

const Project = (data, display_count = 3, nodeElement) => {

    if(!isRemoved){
        var dummyChild = nodeElement.children[0]
        dummyChild.remove()
        isRemoved = !isRemoved
    }
    
    data.forEach((work) => {
        // instantiate child element
        let div = document.createElement("DIV");
        let img = document.createElement("IMG");
        let childDiv = div.cloneNode(true)
        let h6 = document.createElement("H6");
        let p = document.createElement("P");
        let a = document.createElement("A");

        childDiv.classList.add("p-3")
        img.src = work.img_source
        img.alt = work.img_alt_name

        h6.innerText = work.project_title
        h6.classList.add("text-lg")
        h6.classList.add("font-bold")
        h6.classList.add("mb-4")
        childDiv.appendChild(h6)

        p.innerText = work.description
        p.classList.add("mb-5")
        childDiv.appendChild(p)
        
        a.href = work.project_url
        a.target = "_blank"
        a.innerText = "View Project"
        a.classList.add("font-bold")
        a.classList.add("text-xl")
        a.classList.add("mt-3")
        childDiv.appendChild(a)
        
        div.classList.add("border")
        div.classList.add("m-3")
        div.classList.add("rounded")
        div.appendChild(img)
        div.appendChild(childDiv)

        if(display_count != 0){
            nodeElement.appendChild(div)
            display_count -= 1
            // console.log(display_count)
        }
    })
} 

export default { Project } 
