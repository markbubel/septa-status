class BusAlertList {
    constructor(arrayOfAlerts = []) {
        this.title = 'Bus';
        this.alerts = arrayOfAlerts;
        this.update();
        setInterval(this.update.bind(this), 60000);
        this.searchBusRoute = new SearchRoute();
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