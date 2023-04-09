fetch("https://walrus-app-ovpy2.ondigitalocean.app/property/list").then((data)=> {
    //console.log(data); //jsonformat
    return data.json(); //converted to object
}).then((objectdata)=> {
    console.log(objectdata);
    let tabledata="";
    objectdata.data.map((values)=> {
        
        tabledata+=` <tr>
        <td>${values.title}</td>
        <td>${values.type}</td>
        <td>${values.purpose}</td>
        <td>${values.price}</td>
        <td><img src="${values.photos[1]}"/></td>
    </tr>`
    })
    document.getElementById("table_body").innerHTML = tabledata;
})

