class BusAlert extends Alert {
    constructor() {
        super();
        this.element = document.createElement('div');
        this.element.addEventListener('click', this.getDetails.bind(this));
}

getDetails() {
   var details = document.getElementById('bus-alert-details');
   details.innerHTML = this.advisory_message;
}

render() {
    this.element.className = `childOfbus-alerts-container ${this.isGoodService() ? 'bg-success' : 'bg-danger'}`;
    this.element.textContent = this.route_name;
    return this.element;
}
}