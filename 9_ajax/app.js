document.getElementById("button").addEventListener('click', loadquote)


function loadquote(e) {
    let url = 'https://thatsthespir.it/api';
    const req = new XMLHttpRequest();

    console.log(this.readyState);
    req.open('GET', url , true);
    req.withCredentials = true;
    req.setRequestHeader("Content-Type", "application/json");

    req.onreadyStateChange = function() {
        console.log(this.readyState);
        if (this.status === 200 && this.readyState === 4) {
          console.log(this.responseText);
        }
    }


    req.send();
}



fetch('https://thatsthespir.it/api')
  .then(response => response.json())
  .then(json => console.log(json))