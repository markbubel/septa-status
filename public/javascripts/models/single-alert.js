class SingleAlert {
    constructor() {
    }
    render() {
        //if (!this.route_id.includes("rr_")) return "";
        return `
            <div class="panel ${this.isGoodService() ? 'panel-success' : 'panel-danger'}">
                <div class="panel-heading">
                    <h3 class="panel-title">${this.route_name}</h3>
                </div>
                <div class="panel-body">
                ${this.renderContent()}
                </div>
            </div>
        `;
    }
    isGoodService() {
        return this.advisory_message === "" && this.current_message === "" && this.detour_message === "";
    }

    renderMessage(msg) {
        if (msg === "") {
            return "";
        }
        return `${msg}<br />`;
    }
    renderContent() {
        if (this.isGoodService()) {
            return "Good service";
        }
        return `${this.renderMessage(this.advisory_message)}
                ${this.renderMessage(this.current_message)}
                ${this.renderMessage(this.detour_message)}`;
    }

}