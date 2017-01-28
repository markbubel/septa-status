class BusAlert extends Alert {
    constructor() {
        super();
        this.element = document.createElement('div');      
        this.element.className = `childOfbus-alerts-container ${this.isGoodService() ? 'bg-success' : 'bg-danger'}`;
        this.element.textContent = this.route_name;
        this.element.addEventListener('click', this.getDetails(this));
        console.log(this.route_name);
          
}

getDetails() {
   var details = document.getElementById('bus-alert-details');
   details.innerHTML = this.current_message;
   console.log(this.route_name);
}

render() {
    return this.element;
}
}