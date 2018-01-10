let allRegionalRails = [];
let allBuses = [];
let allTrolleyLines = [];

fetch('https://us-central1-ud-course-alert.cloudfunctions.net/getSeptaAlerts')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        let alertCount = 0;
        json.forEach(element => {
                if (element.route_id.startsWith('rr_')) {
                    allRegionalRails.push(element);
                    if (element.isalert === 'Y') {
                        alertCount++;
                    }
                }
                else if (element.route_id.startsWith('bus_')) {
                    allBuses.push(element);
                    if (element.isalert === 'Y') {
                        alertCount++;
                    }
                }
                else if (element.route_id.startsWith('trolley_')) {
                    allTrolleyLines.push(element);
                    if (element.isalert === 'Y') {
                        alertCount++;
                    }
                }
                else { console.log(element.route_name + " was not added"); }
        });
        renderAlertMessage(alertCount);

        renderBus(allBuses);
        renderRail(allRegionalRails);
        renderTrolley(allTrolleyLines);
        
    });

    function renderBus(transportModeArray) {
        let problemBusLines = [];
        let busAlertCount = 0;
        let busAlertMessage = document.querySelector('.bus-alert-message');
        let busAlertList = document.querySelector('.bus-alert-list');

        transportModeArray.forEach(element => {
            if (element.isalert === 'Y') {
                busAlertCount++
                problemBusLines.push(element);

            }
        });

        if (busAlertCount >= 1) {
            busAlertMessage.innerHTML = `There are ${busAlertCount} alerts!`;

            problemBusLines.forEach(el => {
                let singleBus = document.createElement('p');
                singleBus.className = "single-bus";
                singleBus.innerHTML = `Route number ${el.route_name}. This is the ${el.description} route.`;
                busAlertList.appendChild(singleBus);
            });
        }
    }

    function renderRail(transportModeArray) {
        let problemRailLines = [];
        let railAlertCount = 0;
        let railAlertMessage = document.querySelector('.rail-alert-message');
        let railAlertList = document.querySelector('.rail-alert-list');
        
        transportModeArray.forEach(element => {
            if (element.isalert === 'Y') {
                railAlertCount++;
                problemRailLines.push(element);
            }
        });

        if (railAlertCount >= 1) {
            railAlertMessage.innerHTML = `There are ${railAlertCount} alerts!`;

            problemRailLines.forEach(el => {
                let singleRail = document.createElement('p');
                singleRail.className = "single-rail";
                singleRail.innerHTML = `Route number ${el.route_name}. This is the ${el.description} route.`;
                railAlertList.appendChild(singleRail);
            });
            
        }
    }

    function renderTrolley(transportModeArray) {
        let problemTrolleyLines = [];
        let trolleyAlertCount = 0;
        let trolleyAlertMessage = document.querySelector('.trolley-alert-message');
        let trolleyAlertList = document.querySelector('.trolley-alert-list');

        transportModeArray.forEach(element => {
            if (element.isalert === 'Y') {
                trolleyAlertCount++;
                problemTrolleyLines.push(element);
            }
        });
        if (trolleyAlertCount >= 1) {
            trolleyAlertMessage.innerHTML = `There are ${trolleyAlertCount} alerts!`;

            problemTrolleyLines.forEach(el => {
                let singleTrolley = document.createElement('p');
                singleTrolley.className = "single-trolley";
                singleTrolley.innerHTML = `Route number ${el.route_name}. This is the ${el.description} route.`;
                trolleyAlertList.appendChild(singleTrolley);
            });
        }
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

// function searchTransit() {
//     alert("Searching...");
// }

// var searchForm = document.getElementById("searchButton");
// searchForm.addEventListener('click', function() {
//     searchTransit();
// });