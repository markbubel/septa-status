class SearchRoute extends BusAlertList {
    constructor() {
        super();
        this.submit = document.getElementById("bus-search").addEventListener('submit', this.search.bind(this));
    }

    search(route) {
        console.log(this.submit);
    }
}