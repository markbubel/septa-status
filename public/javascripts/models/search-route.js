class SearchRoute {
    constructor(app) {
        this.app = app;
        document.getElementById("bus-search").addEventListener('submit', this.search.bind(this));
    }

    search(e) {
        e.preventDefault();
        const query = document.getElementById('query');
        console.log(this.app);
        this.app.searchBusRoute(e);
    }
}