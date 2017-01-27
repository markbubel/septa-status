class BusAlert extends Alert {
    render() {
        return `
      <div class="childOfbus-alerts-container ${this.isGoodService() ? 'bg-success' : 'bg-danger'}">
        ${this.route_name}
      </div>
`;
    }
}