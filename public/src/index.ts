console.log('Hello world');

const allStatus = document.querySelector('.list-group');

const tableBody = document.querySelector('#tableBody');

let allRegionalRails = [];
let allBuses = [];
let allTrolleyLines = [];

fetch('/api/status')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let alertCount = 0;
        json.forEach(element => {
            if (element.isalert === 'Y') {
                alertCount++;
            }
            else {
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
            }         
        });
        renderTransitLine(allBuses);
        renderAlertMessage(alertCount);
    });

    function renderTransitLine(transitArray) {
        transitArray.forEach(element => {
            const tableRow = document.createElement('tr');

            const tdRouteName = document.createElement('td');
            const tdRouteAlert = document.createElement('td');
            const tdRouteDetour = document.createElement('td');
            const tdRouteUpdateTime = document.createElement('td');
            const tdDescription = document.createElement('td');

            tdRouteName.innerHTML = `${element.route_name}`;
            tdRouteAlert.innerHTML = `${element.isalert}`;
            tdRouteDetour.innerHTML = `${element.isdetour}`;
            tdRouteUpdateTime.innerHTML = `${element.last_updated}`;
            tdDescription.innerHTML = `${element.description}`;

            if(element.isalert === 'Y') {
                tdRouteAlert.className = "table-danger";
            }

            tableRow.appendChild(tdRouteName); 
            tableRow.appendChild(tdRouteAlert); 
            tableRow.appendChild(tdRouteDetour); 
            tableRow.appendChild(tdRouteUpdateTime);
            tableRow.appendChild(tdDescription);

            tableBody.appendChild(tableRow); 

        });
    }




    function renderAlertMessage(alertCount) {
        let alertDiv = document.getElementsByClassName('alert')[0];
        if (alertCount === 1) {
            alertDiv.className = 'alert alert-danger';
            alertDiv.innerHTML = `There is ${alertCount} alert across all lines.`
        }
        else if (alertCount > 1) {
            alertDiv.className = 'alert alert-danger';
            alertDiv.innerHTML = `There are ${alertCount} alerts across all lines.`
        }
        else {
            alertDiv.className = 'alert alert-success';
            alertDiv.innerHTML = "There is a good service on all lines."
        }
    }
     