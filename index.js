
var container = [];
var sites;


var storedData = localStorage.getItem("site");
if (storedData) {
    container = JSON.parse(storedData);
}

display()



function add() {
    sites = {
        site_Name: document.getElementById('siteName').value,
        site_URL: document.getElementById('siteURL').value
    }

    container.push(sites);
    localStorage.setItem("site", JSON.stringify(container))
    

    display()
    clear()
}



function clear() {

    sites = {
        site_Name: document.getElementById('siteName').value = null,
        site_URL: document.getElementById('siteURL').value = null
    }

}


function display() {

    var tableDesgin = ''

    var tebleContent = ''

    for (let i = 0; i < container.length; i++) {

        tableDesgin += `

        <tr>
                <th scope="row" class="text-center text-wrap  text-break">${container[i].site_Name}</th>
                <td class="text-center text-wrap  text-break">${container[i].site_URL}</td>
                <td  class="text-center"><button class="btn btn-success" id = "visits" >

                <a onclick="" href="${container[i].site_URL}" class="dec" target="_blank">
                <i class="fa-solid fa-eye"></i> Visit
                </a>
                </button></td>
                <td class="text-center"><button class="btn btn-danger" onclick="deleteItem(${i})"> <i class="fa-solid fa-trash"></i> Delete</button></td>
              </tr>
        `

    }

    tebleContent += tableDesgin
    document.getElementById('display').innerHTML = tebleContent
}


function deleteItem(iIndex) {

    container.splice(iIndex, 1);
    localStorage.setItem("site", JSON.stringify(container));
    display()

}











