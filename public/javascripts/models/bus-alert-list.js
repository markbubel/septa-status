class BusAlertList {
    constructor(arrayOfAlerts = []) {
        this.title = 'Bus';
        this.alerts = arrayOfAlerts;
        this.update();
        setInterval(this.update.bind(this), 60000);
        this.newSearch = new SearchRoute(this);
    }

    searchRoute(theQuery) {
        for (var i = 0; i < this.alerts.length; i++) {
            if (theQuery !== this.alerts[i].route_name) {
                console.log("not a route");
            }
            if (theQuery === this.alerts[i].route_name) break;
  }

        document.getElementById("bus-alert-details").innerHTML = this.alerts[i].advisory_message;
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