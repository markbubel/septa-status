console.log('Hello world');

let allStatus = document.querySelector('#allStatus');

fetch('/api/status')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
       
        json.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML = `${element.route_id} ${element.route_name}`;
            allStatus.appendChild(li);
        });
       
    });