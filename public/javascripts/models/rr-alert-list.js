class RegionalRailAlertList {
    constructor(arrayOfAlerts = []) {
        console.log('made rr')
        this.title = 'Regional Rail';
        this.alerts = arrayOfAlerts;
        this.update();
        setInterval(this.update.bind(this), 60000);
    }

    render() {
        let output = '';

        for (const a of this.alerts) {
            output += a.render();
        }
        console.log(output)
        document.getElementById("rr-alerts-container").innerHTML = output;
    }

    update() {
        new Service().getAllStatus('regional-rail', arrayOfAlerts => {
            this.alerts = arrayOfAlerts;
            this.render();
        });
    }
}