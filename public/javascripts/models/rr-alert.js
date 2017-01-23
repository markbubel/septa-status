class RegionalRailAlert extends Alert {
    render() {
        return `
            <div class="panel ${this.isGoodService() ? 'panel-success' : 'panel-danger'}">
                <div class="panel-heading">
                    <h3 class="panel-title">${this.route_name}</h3>
                </div>
                <div class="panel-body">
                    ${this.isGoodService() ? 'Good Service' : ''}
                    ${this.renderMessage(this.current_message, false)}
                    ${this.renderMessage(this.advisory_message, false)}
                    ${this.renderMessage(this.detour_message, true)}
                </div>
            </div>
        `;
    }
}