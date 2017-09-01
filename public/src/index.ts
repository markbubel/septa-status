console.log('Hello world');

const allStatus = document.querySelector('.list-group');
let allRegionalRails = [];
let allBuses = [];
let allTrolleyLines = [];


fetch('/api/status')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
       
        json.forEach(element => {
                if (element.route_id.startsWith('rr_')) {
                    allRegionalRails.push(element);
                }
                else if (element.route_id.startsWith('bus_')) {
                    allBuses.push(element);
                }
                else if (element.route_id.startsWith('trolley_')) {
                    allTrolleyLines.push(element);
                }
                else { console.log(element.route_id + " was not added"); }          
        });
        renderTransitLine(allBuses);
    });

    function renderTransitLine(transitArray) {
        transitArray.forEach(element => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `Bus Route ID: ${element.route_id}
                            Bus Route name: ${element.route_name}`;
            allStatus.appendChild(li); 
        });
    }
     