class SingleAlertList {
    //alerts = array of SingleAlert
    constructor(alerts = []) {
        this.title = "Alerts";
        this.alerts = alerts;
        this.render();
    }
    render() {
        let output = `<h1>${this.title}</h1>`;
        for (const a of this.alerts) {
            output += a.render();
        }
        return output;
    }
}