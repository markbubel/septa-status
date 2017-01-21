// {title: '', alerts: [SingleAlerts], render()}
class SingleAlertList {
    //alerts = array of SingleAlert
    constructor(arrayOfAlerts = []) {
        this.title = "Regional Rail Alerts";
        this.alerts = arrayOfAlerts;
        this.update();
        setInterval(this.update.bind(this), 5000);
    }
    render() {
        let output = `<div class="page-header"><h1>${this.title}</h1><span class="badge">Total alerts: ${this.alerts.length}</span></div>`;
        for (const alert of this.alerts) {
            output += alert.render();
        }
        document.getElementById("alerts-container").innerHTML = output;
    }
     update() {
        new Service().getAllStatus(arrayOfAlerts => {
            this.alerts = arrayOfAlerts;
            this.render();
        });
    }
}