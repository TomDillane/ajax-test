let xhr = new XMLHttpRequest();
let data;

xhr.open('Get', 'https://ci-swapi.herokuapp.com/api/');
xhr.send();

xhr.onreadystatechange = function() {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
    }
};

setTimeout(function() {
    document.getElementById('tomd').innerHTML = data;
}, 500);