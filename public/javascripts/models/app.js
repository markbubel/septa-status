class App {
    constructor() {
        if(window.location.pathname.includes('regional-rail')) this.alertList = new RegionalRailAlertList();
        else if(window.location.pathname.includes('buses')) this.alertList = new BusAlertList();
    }
}