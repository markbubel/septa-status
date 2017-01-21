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
                ${this.renderMessage()}
                </div>
            </div>
        `;
    }
    isGoodService() {
        return this.advisory_message === "" && this.current_message === "" && this.detour_message === "";
    }

    renderMessage() {
        if (this.isGoodService()) {
            return "Good service";
        }
        return `${this.advisory_message}<br />
                ${this.current_message}<br />
                ${this.detour_message}`;
    }
}