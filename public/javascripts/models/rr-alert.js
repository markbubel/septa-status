class RegionalRailAlert extends Alert {
    render() {
        return `
            <div class="panel ${this.isGoodService() ? 'panel-success' : 'panel-danger'}">
                <div class="panel-heading">
                    <h3 class="panel-title">${this.route_name}</h3>
                </div>
                <div class="panel-body">
                    ${this.isGoodService() ? 'Good service' : this.renderMessage(this.current_message, false)}
                </div>
            </div>
        `;
    }
}