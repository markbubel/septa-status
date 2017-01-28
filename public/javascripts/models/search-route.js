class SearchRoute {
    constructor(app) {
        this.app = app;
        document.getElementById("bus-search").addEventListener('submit', this.search.bind(this));
    }

    search(e) {
        e.preventDefault();
        this.app.searchBusRoute(e);
    }
}