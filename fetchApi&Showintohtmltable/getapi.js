fetch("https://dummyjson.com/products").then((data)=> {
    //console.log(data); //jsonformat
    return data.json(); //converted to object
}).then((objectdata)=> {
    console.log(objectdata);
    let tabledata="";
    objectdata.products.map((values)=> {
        tabledata+=` <tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.images[0]}"/></td>
    </tr>`
    })
    document.getElementById("table_body").innerHTML = tabledata;
})