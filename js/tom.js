const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });
    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    let tableRows = [];
    let el = document.getElementById('tomd');
    el.innerHTML = "";
    getData(type, function(data) {
       // console.dir(data);
        data = data.results;
        let tableHeaders = getTableHeaders(data[0]);
        data.forEach(function(item) {
            let dataRow = [];
            Object.keys(item).forEach(function(key) {
                dataRow.push(`<td>${item[key]}</td>`);
            });
            tableRows.push(dataRow);
            
          //  el.innerHTML += "<p>" + item.name + "</p>";
        });
        
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}


/*function printDataToConsole(data) {
    document.getElementById('tomd').innerHTML = JSON.stringify(data);
    console.log(data);
}

getData(printDataToConsole);
*/


/*
setTimeout(function() {
    document.getElementById('tomd').innerHTML = JSON.stringify(data);
}, 500);
*/