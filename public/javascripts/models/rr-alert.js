class RegionalRailAlert extends Alert {
    render() {
        return `
            <div class="panel ${this.isGoodService() ? 'panel-success' : 'panel-danger'}">
                <div class="panel-heading">
                    <h3 class="panel-title">${this.route_name}</h3>
                </div>
                <div class="panel-body">
                    ${this.renderCurrentMessage()}<br />
                    ${this.renderAdvisoryMessage()}<br />
                    ${this.renderDetourMessage()}
                </div>
            </div>
        `;
    }
}