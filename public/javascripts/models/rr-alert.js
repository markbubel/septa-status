class RegionalRailAlert extends Alert {
    render() {
        return `
            <li class="list-group-item ${this.isGoodService() ? 'list-group-item-success' : 'list-group-item-danger'}">
                ${this.route_name}
                <p class="alertMessage">${this.isGoodService() ? 'Good service' : this.renderMessage(this.current_message, false)}</p>
            </li>
        `;
    }
}