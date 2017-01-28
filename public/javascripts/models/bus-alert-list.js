class BusAlertList {
    constructor(arrayOfAlerts = []) {
        this.title = 'Bus';
        this.alerts = arrayOfAlerts;
        this.update();
        setInterval(this.update.bind(this), 60000);
        this.newSearch = new SearchRoute(this);
    }

    searchRoute(theQuery) {
        console.log(theQuery);
        for (const a of this.alerts) {
            if (theQuery === a.route_name) {
                console.log(this.advisory_message);
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