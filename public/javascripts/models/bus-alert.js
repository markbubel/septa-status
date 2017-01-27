class BusAlert extends Alert {
    addClickListener() {
        var theBtn = document.getElementsByClassName("btn");
        theBtn = addEventListener('click', function() {
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