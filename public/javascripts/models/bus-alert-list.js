class BusAlertList {
    constructor(arrayOfAlerts = []) {
        this.title = 'Bus';
        this.alerts = arrayOfAlerts;
        this.update();
        setInterval(this.update.bind(this), 60000);
    }

    render() {
        let output = '';

        for (const a of this.alerts) {
            output += a.render();
        }
        document.getElementById("bus-alerts-container").innerHTML = output;
    }

    update() {
        new Service().getAllStatus('bus', arrayOfAlerts => {
            this.alerts = arrayOfAlerts;
            this.render();
        });
    }
}