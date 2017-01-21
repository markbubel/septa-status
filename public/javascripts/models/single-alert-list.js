class SingleAlertList {
    //alerts = array of SingleAlert
    constructor(alerts = []) {
        this.title = "Regional Rail Alerts";
        this.alerts = alerts;
        this.render();
    }
    render() {
        let output = `<div class="page-header"><h1>${this.title}</h1><span class="badge">Total alerts: ${this.alerts.length}</span></div>`;
        for (const a of this.alerts) {
            output += a.render();
        }
        return output;
    }
}