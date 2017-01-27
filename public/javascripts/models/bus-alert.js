class BusAlert extends Alert {
    addClickListener() {
        document.getElementsByClassName("btn").addEventListener('click', function() {
            console.log("clicked on: ");
        }, false);
    }

    render() {
        this.addClickListener();
        return `
      <div class="childOfbus-alerts-container ${this.isGoodService() ? 'bg-success' : 'bg-danger'}">
        ${this.route_name}
      </div>
`;
    }
}