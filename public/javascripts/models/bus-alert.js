class BusAlert extends Alert {
    constructor () {
        this.document.getElementsByClassName('childOfbus-alerts-container').addEventListener('click', function(){});
}


render() {
    return `
      <div class="childOfbus-alerts-container ${this.isGoodService() ? 'bg-success' : 'bg-danger'}">
        ${this.route_name}
      </div>
`;
}
}