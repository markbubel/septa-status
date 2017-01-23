class Alert {
    constructor(arrayOfAlerts = []) {
        this.title = "";
        this.alerts = arrayOfAlerts;
        this.update();
        setInterval(this.update.bind(this), 60000);
    }

    renderRegionalRailAlert() {
        let output = `<div class="page-header"><h1>${this.title}</h1></div>`;
        for (var alert of this.alerts) {
            output += alert.render();
        }
        document.getElementById("rr-alerts-container").innerHTML = output;
    }

    renderBusAlert() {
        let output = `<div class="page-header"><h1>${this.title}</h1></div>`;
        for (var alert of this.alerts) {
            output += alert.render();
        }
        document.getElementById("bus-alerts-container").innerHTML = output;
    }

     update() {
        new Service().getAllStatus(arrayOfAlerts => {
            this.alerts = arrayOfAlerts;
            for (var a of this.alerts) {
                if (this.route_id.includes("rr_")) {
                this.renderRegionalRailAlert();
                }
            else {
                 this.renderBusAlert();
            }
            }
        });
    }

    isGoodService() {
        return this.advisory_message === "" && this.current_message === "" && this.detour_message === "";
    }

    buildMessage(msg) {
        if (msg === "") {
            return "";
        }
        return `${msg}`;
    }

    renderCurrentMessage() {
        return `${this.buildMessage(this.current_message)}`;
    }

    renderAdvisoryMessage() {
        return `${this.buildMessage(this.advisory_message)}`;
    }
    renderDetourMessage() {
        return `${this.buildMessage(this.detour_message)}`;
    }
}