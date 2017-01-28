class BusAlertList {
    constructor(arrayOfAlerts = []) {
        this.title = 'Bus';
        this.alerts = arrayOfAlerts;
        this.update();
        setInterval(this.update.bind(this), 60000);
        this.searchBusRoute = new SearchRoute(this);
    }

    searchBusRoute(routeNameSearch) {
        for (const a of this.alerts) {
            if (routeNameSearch === a.route_name) {
                console.log("matched");
            }
            else {
                console.log("no match found");
            }
        }
    }

    render() {
                
        const output = document.getElementById("bus-alerts-container");
        output.innerHTML = '';

        for (const a of this.alerts) {
            output.appendChild(a.render());
        }
    }

    update() {
        new Service().getAllStatus('bus', arrayOfAlerts => {
            this.alerts = arrayOfAlerts;
            this.render();
        });
    }
}