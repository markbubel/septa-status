console.log('Hello world');

const allStatus = document.querySelector('.list-group');

fetch('/api/status')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        json.forEach(element => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `Route ID: ${element.route_id}
                            Route name: ${element.route_name}`;
            allStatus.appendChild(li);
        });
    });